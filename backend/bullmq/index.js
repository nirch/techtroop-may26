const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Simulates generating a PDF invoice — slow and CPU-heavy in real life
async function generateInvoicePDF(order) {
  console.log(`[invoice] Generating PDF for order ${order.id}...`);
  await sleep(3000); // pretend this takes 3 seconds
  console.log(`[invoice] PDF ready for order ${order.id}`);
}

// Simulates sending the invoice by email
async function sendInvoiceEmail(order) {
  console.log(`[email] Sending invoice email to ${order.email}...`);
  await sleep(2000); // pretend this takes 2 seconds
  console.log(`[email] Email sent for order ${order.id}`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

  await generateInvoicePDF(order);
  await sendInvoiceEmail(order);

  res.json({
    message: "Order confirmed",
    orderId: order.id,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Try: POST http://localhost:${PORT}/orders`);
});