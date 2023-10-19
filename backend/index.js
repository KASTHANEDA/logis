
import express from "express";
import dotenv from "dotenv";
import apiRoutes from "./Routes/api.js";
import connectToDataBase from "./config/db.js";
import cors from 'cors';

const app = express();
const port = process.env.PORT || 9100;
dotenv.config();
connectToDataBase();
app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);
// app.get("/", (require, response) => {
//   response.send("Welcome a mi api");
// });
app.listen(port, () => {
    console.log(" holi ", port);
});

export default app;

