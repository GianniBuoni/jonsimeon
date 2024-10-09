import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";
import { config } from "dotenv";

config({
  path: "../.env",
});

export const env = createEnv({
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_ASSETS: z.string().url(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
