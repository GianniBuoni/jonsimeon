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
  projects: Project[];
};

export type SiteAsset = {
  id: string;
  title: string;
  image: DirectusFile;
};

export type IconBadge = {
  id: string;
  icon: string;
  href: string;
  label: string;
  description: string;
  tag: IconTag;
};

export type IconTag = "skills" | "resume-toc" | "me";

export type Post = {
  id: string;
  slug: string;
  title: string;
  pub_date: string;
  description: string;
  body: string;
  hero_image: DirectusFile;
};

export type Project = {
  title: string;
  subtitle?: string;
  heroImage: DirectusFile;
  carousel: DirectusFile[];
  links: IconBadge[];
  skills: IconBadge[];
};

export default dbClient;
