import express from "express";
import cors from "cors";
import { router as apiRouter } from "./routes/index.js";

export const app =  express();


const corsOptions = {
    origin: [
        "http://localhost:5173",
        "http://localhost:5174",
        "https://frontend-app-theta-teal.vercel.app"
    ],//frontend domain
};

app.use(cors(corsOptions));

app.use(express.json());

app.use("/api", apiRouter);


