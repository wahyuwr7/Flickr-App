import express from "express";
import cors from "cors";
import routes from "./routes/routes.js"

const app = express();
app.use('/', routes);
app.use(cors());
app.use(express.json());

app.listen('8080',()=>console.log(`Server started...`))