/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  readonly PUBLIC_ASSETS: string;
  readonly API_URL: string;
  readonly API_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
