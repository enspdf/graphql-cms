import express from "express";
import next from "next";
import path from "path";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(3000);
});
