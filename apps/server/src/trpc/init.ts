import { initTRPC } from "@trpc/server";

import type { TRPCContext } from "./context";

export const trpc = initTRPC.context<TRPCContext>().create();

export const createTRPCRouter = trpc.router;
export const publicProcedure = trpc.procedure;
