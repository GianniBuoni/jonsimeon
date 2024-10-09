import { createDirectus, rest, staticToken } from "@directus/sdk";
import type { DirectusFile } from "@directus/sdk";
import { env } from "@lib/sharedEnv";

//variables
const directusURL = env.API_URL;
const directusToken = env.API_TOKEN;

// define client
const dbClient = createDirectus<Schema>(directusURL)
  .with(staticToken(directusToken))
  .with(rest());

// define schema
type Schema = {
  posts: Post[];
  site_assets: SiteAsset[];
};

type SiteAsset = {
  id: string;
  title: string;
  image: DirectusFile;
};

type Post = {
  id: string;
  slug: string;
  title: string;
  pub_date: string;
  description: string;
  body: string;
  hero_image: DirectusFile;
};

export default dbClient;
