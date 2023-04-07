import bodyParser from "body-parser";
import express from "express";
import postController from "./Posts/Controller";

console.log("Hello worldd");

const app = express();

app.use(bodyParser.json());

app.get('/', (req: express.Request, res: express.Response) => {
    res.json("salut");
})

app.use("/posts", postController);

app.listen(process.env.PORT || 3000, () => console.log("Serveur démarré"));