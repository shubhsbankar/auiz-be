import express from 'express';
import router from './routers/router';
import cors from 'cors';
import { connectToDatabase } from './db/quiz.db';

const app = express();
const PORT = 5672;

const serverConnect = function () {
    console.log(`Server connected to port ${PORT}`);
}
app.use(express.json());
app.use(cors( {
    origin: "http://localhost:5173", // Allow requests only from this origin
  }));
app.use("/", router);


connectToDatabase();
app.listen(PORT,serverConnect);