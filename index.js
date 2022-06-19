import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

let users = [];

let tweets = [
  {
    username: "bobesponja",
    avatar:
      "https://s2.glbimg.com/1zleL_SY-4k9yhi9iFGuH1FsSmM=/e.glbimg.com/og/ed/f/original/2020/06/17/bobesponja_EqE9Kg7.jpg",
    tweet: "eu amo o hub",
  },
  {
    username: "guilherme",
    avatar:
      "https://criticalhits.com.br/wp-content/uploads/2020/03/madara-Feixe-de-Luz-da-Libera%C3%A7%C3%A3o-de-Tempestade-910x511.jpg",
    tweet: "to atrasado no hub",
  },
  {
    username: "matsumuraGuilherme",
    avatar:
      "https://img.quizur.com/f/img60df956150eca5.80755941.jpg?lastEdited=1625265508",
    tweet: "Foi mal Adriano, to MTO atrasado no hub",
  },
];

app.post("/sign-up", (req, res) => {
  users.push(req.body);
  res.send("OK");
});

app.post("/tweets", (req, res) => {
  tweets.push(req.body);
  res.send("OK");
});

app.get("/tweets", (req, res) => {
  if (tweets.length <= 10) {
    res.send(tweets);
  } else if (tweets.length > 10) {
    tweets.splice(0, 1);
    res.send(tweets);
  }
});

app.listen(5000, () => {
  console.log("Servidor rodando");
});
