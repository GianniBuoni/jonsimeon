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
  icon_badge: IconBadge[]; // Rename in the db later? Should be plural for consistency
  posts: Post[];
  projects: Project[];
  resume: Resume;
  resume_icon_badge: ResumeBadge[];
  resume_projects: ResumeProject[];
  site_assets: SiteAsset[];
  directus_files: DirectusFile[]; // I was getting type errors without this added
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
  id: string;
  title: string;
  subtitle?: string;
  hero_image: DirectusFile;
  carousel_image: DirectusFile[];
  links: IconBadge[];
};

export type Resume = {
  id: string;
  toc: ResumeBadge[];
  projects: ResumeProject[];
};

export type ResumeBadge = {
  id: number;
  resume_id: Resume["id"];
  icon_badge_id: IconBadge["id"];
};

export type ResumeProject = {
  id: number;
  resume_id: Resume["id"];
  projects_id: Project["id"];
};

export default dbClient;
