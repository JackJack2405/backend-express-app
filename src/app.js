import express from "express";
import cors from "cors";
import { router as apiRouter, router } from "./routes/index.js";

export const app =  express();


const corsOptions = {
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "http://localhost:5175",
        "https://frontend-app-theta-teal.vercel.app",
    ],//frontend domain
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", apiRouter);

// Catch-all for  404 Not Found
app.use((req, res, next) => {
    const error = new Error(`Not found: ${req.method} ${req.originalUrl}`)
    error.name = "NotFoundError"
    error.status = 404
    next(error)
})


// Centralized Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(err.status || 500).json({
        success: true,
        message: err.message || "Internal Server Error",
        path: req.originalUrl,
        method: req.method,
        timestamp: new Date().toISOString(),
        stack: err.stack,
    });
});
