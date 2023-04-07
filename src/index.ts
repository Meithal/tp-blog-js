import express from "express";

console.log("Hello worldd");

const app = express();


app.listen(process.env.PORT || 3000, () => console.log("Serveur démarré"));