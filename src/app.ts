import path from "node:path";
import compression from "compression";
import responseTime from "response-time";
import express from "ultimate-express";

import healthRoute from "./routes/health.route";

// Create Express server
const app = express({});

app.set("catch async errors", true);

// Express configuration
app.set("port", process.env.PORT ?? 3000);
app.use(responseTime());
app.use(express.json({ limit: "100mb" }));
app.use(compression({ threshold: 1 }));
app.use(express.urlencoded({ extended: true }));

app.use(
  express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 }),
);

app.use("/health", healthRoute);

export default app;
