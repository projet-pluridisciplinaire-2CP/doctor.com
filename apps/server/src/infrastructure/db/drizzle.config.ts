import "dotenv/config";

import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/infrastructure/db/schema.ts",
  out: "./src/infrastructure/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL ?? "postgresql://postgres:postgres@localhost:5432/doctor_com",
  },
  strict: true,
  verbose: true,
});
