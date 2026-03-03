import "dotenv/config";

import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

import { createTRPCContext } from "./trpc/context";
import { appRouter } from "./trpc/router";

const app: express.Express = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());

app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: createTRPCContext,
  }),
);

app.get("/", (_req, res) => {
  res.status(200).send("server running");
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});

export { app };
