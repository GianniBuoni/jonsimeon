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
  directus_files: DirectusFile[]; // I was getting type errors without this added
  icon_badge: IconBadge[]; // Rename in the db later? Should be plural for consistency
};

type SiteAsset = {
  id: string;
  title: string;
  image: DirectusFile;
};

type IconBadge = {
  id: string;
  icon: string;
  href: string;
  label: string;
  description: string;
  tags: IconTag[];
};

type IconTag = "skills" | "links";

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
