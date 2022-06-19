import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req, res) => res.send("Bem-vindo(a)!"));

app.listen(5000, () => {
  console.log("Servidor rodando");
});