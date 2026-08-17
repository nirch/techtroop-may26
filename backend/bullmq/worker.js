const { Worker } = require("bullmq");

// --- BullMQ Worker ---
// A Worker is a separate process that watches the queue and processes jobs.
// It runs independently of the Express server — that's the whole point.
// You can run multiple workers in parallel, on different machines, whatever you need.

async function generateInvoicePDF(order) {
  console.log(`[invoice] Generating PDF for order #${order.id}...`);
  await sleep(3000);
  console.log(`[invoice] PDF ready for order #${order.id}`);
}

async function sendInvoiceEmail(order) {
  console.log(`[email] Sending invoice to ${order.email}...`);
  await sleep(2000);
  console.log(`[email] Invoice sent for order #${order.id}`);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// The worker connects to the same Redis instance and the same queue name.
// Every time a job appears in "invoices", this function runs.
const worker = new Worker(
  "invoices",
  async (job) => {
    const order = job.data;
    console.log(`\n[worker] Picked up job: generate-invoice for order #${order.id}`);

    await generateInvoicePDF(order);
    await sendInvoiceEmail(order);

    console.log(`[worker] Job complete for order #${order.id}`);
  },
  {
    connection: { host: "localhost", port: 6379 },
  }
);

worker.on("completed", (job) => {
  console.log(`[worker] ✓ Job ${job.id} completed`);
});

worker.on("failed", (job, err) => {
  console.error(`[worker] ✗ Job ${job.id} failed:`, err.message);
});

console.log("Worker started — waiting for jobs...");