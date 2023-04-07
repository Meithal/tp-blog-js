import bodyParser from "body-parser";
import express from "express";
import postController from "./Posts/Controller";
import saveOnDiscEveryOperationMiddleware from "./middlewares/saveOnDiscEveryOperation";
import authController from "./auth/authController";
import jwt from 'jwt-express';
import configService from "./services/configService";
import cookieParser from "cookie-parser";

console.log("Hello worldd");

const app = express();

app.use(bodyParser.json());
app.use(jwt.init(configService.JWT_SECRET, {
    cookies: false,
    stales: 3_600_000,
}));
app.use(cookieParser());

app.get('/', (req: express.Request, res: express.Response) => {
    res.json("salut");
});

app.use("/posts", saveOnDiscEveryOperationMiddleware(), postController);
app.use('/auth', authController);

app.listen(process.env.PORT || 3000, () => console.log("Serveur démarré"));
