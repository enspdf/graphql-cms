import express from "express";
import next from "next";
import path from "path";

const dev = process.env.NODE_ENV !== "production";
const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

import config from "@config";

nextApp.prepare().then(() => {
  const app = express();

  app.use(express.static(path.join(__dirname, "../public")));

  app.get("/login", (req, res) => {
    return nextApp.render(req, res, "/users/login", req.query);
  });

  app.all("*", (req, res) => {
    return handle(req, res);
  });

  app.listen(config.serverPort);
});
