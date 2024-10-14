import { createDirectus, rest, staticToken } from "@directus/sdk";
export type { DirectusFile } from "@directus/sdk";
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
  projects_files: ProjectsFiles[];
  projects_icon_badge: ProjectsIconBadges[];
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
  carousel_image: number[] | ProjectsFiles[];
  links: number[] | ProjectsIconBadges[];
};

export type ProjectsFiles = {
  id: number;
  projects_id: string | Project;
  directus_files_id: string | DirectusFile;
};

export type ProjectsIconBadges = {
  id: number;
  projects_id: string | Project;
  icon_badge_id: string | IconBadge;
};

export type Resume = {
  id: string;
  toc: number[] | ResumeBadge[];
  projects: number[] | ResumeProject[];
};

export type ResumeBadge = {
  id: number;
  resume_id: string | Resume;
  icon_badge_id: string | IconBadge;
};

export type ResumeProject = {
  id: number;
  resume_id: string | Resume;
  projects_id: string | Project;
};

export default dbClient;
