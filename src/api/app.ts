import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import lusca from "lusca";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Routers
import healthRouter from "./routers/healthRouter";
import geniallyRouter from "./routers/geniallyRouter";
import geniallyCounterRouter from "./routers/geniallyCounterRouter";

// Mongo Connection
import { connectToMongo } from "../contexts/shared/infraestructure/persistence/mongo/MongoConnection";

// Create Express server
const app = express();

// Express configuration
app.set("port", 3000);

// Connect to MongoDB
if (process.env.MONGODB_URI) {
  connectToMongo(process.env.MONGODB_URI);
}

// Middlewares
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

// Routes
app.use("/health", healthRouter);
app.use("/genially", geniallyRouter);
app.use("/genially/count", geniallyCounterRouter);

export default app;
