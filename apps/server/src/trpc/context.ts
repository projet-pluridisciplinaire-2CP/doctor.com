import { randomUUID } from "node:crypto";

import type { CreateExpressContextOptions } from "@trpc/server/adapters/express";

import { db } from "../infrastructure/db";

export interface SessionUtilisateurPlaceholder {
  utilisateur_id: string;
  session_id: string;
  role: string;
}

export interface TRPCContext {
  db: typeof db;
  request_id: string;
  session: SessionUtilisateurPlaceholder | null;
}

export async function createTRPCContext(
  options: CreateExpressContextOptions,
): Promise<TRPCContext> {
  const requestIdHeader = options.req.header("x-request-id");

  return {
    db,
    request_id: requestIdHeader ?? randomUUID(),
    session: null,
  };
}
