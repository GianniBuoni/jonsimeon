import { createEnv } from "@t3-oss/env-core";
import "dotenv/config";
import { z } from "zod";

export const env = createEnv({
  server: {
    API_URL: z.string().url(),
    API_TOKEN: z.string(),
  },
  clientPrefix: "PUBLIC_",
  client: {
    PUBLIC_ASSETS: z.string().url(),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
});
