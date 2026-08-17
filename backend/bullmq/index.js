const express = require("express");
const { Queue } = require("bullmq");

const app = express();
const PORT = 3000;

app.use(express.json());

// --- BullMQ Queue ---
// A Queue is the "inbox" — the server drops jobs in here and moves on.
// Redis is the backbone: it stores the jobs so they survive restarts.
const invoiceQueue = new Queue("invoices", {
  connection: { host: "localhost", port: 6379 },
});

// POST /orders
// Problem: the handler does ALL the work before responding.
// The user waits 5+ seconds staring at a spinner.
// What if the server crashes halfway through? The order is saved but no invoice.
app.post("/orders", async (req, res) => {
  const order = {
    id: Math.floor(Math.random() * 10000),
    email: req.body.email || "customer@example.com",
    items: req.body.items || [],
    createdAt: new Date().toISOString(),
  };

  console.log(`\n[order] New order received: #${order.id}`);

  // Add the job to the queue — this takes ~1ms
  await invoiceQueue.add("generate-invoice", order);

  res.json({
    message: "Order confirmed! Your invoice will be emailed shortly.",
    orderId: order.id,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Try: POST http://localhost:${PORT}/orders`);
});