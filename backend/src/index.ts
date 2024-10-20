import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan"
import { userRouter } from "./routes/user.route";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

const PORT = process.env.PORT || 5000;

app.get('/', (req: Request, res: Response) => {
    try {
        res.status(200).json({
            message: "Welcome to Merlin API",
        });
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error",
        })
    }
})

app.use('*', (req: Request, res: Response) => {
    res.status(404).json({
        message: "Route not found",
    })
})

// app.use((err: Error, req: Request, res: Response, next: NextFunction) ={
//     console.error(err.stack);
//     return res.status(500).json({
//         message: "Internal Server Error"
//     })
// })

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})