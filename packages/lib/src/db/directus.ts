import { createDirectus, rest, staticToken } from "@directus/sdk";
export type { DirectusFile } from "@directus/sdk";
import type { DirectusFile } from "@directus/sdk";
import { env } from "../sharedEnv";
import type { Post } from "./schemas/post";
import type * as Project from "./schemas/projects";
import type * as Resume from "./schemas/resume";
import type * as Experience from "./schemas/experience";

//variables
const directusURL = env.API_URL;
const directusToken = env.API_TOKEN;

// define client
const dbClient = createDirectus<Schema>(directusURL)
  .with(staticToken(directusToken))
  .with(rest());

// define schema
type Schema = {
  experience: Experience.Experience[];
  experience_icon_badge: Experience.ExpsIconBadges[];
  icon_badge: IconBadge[]; // Rename in the db later? Should be plural for consistency
  posts: Post[];
  projects: Project.Project[];
  projects_files: Project.ProjectsFiles[];
  projects_icon_badge: Project.ProjectsIconBadges[];
  resume: Resume.Resume;
  resume_icon_badge: Resume.ResumeBadge[];
  resume_projects: Resume.ResumeProject[];
  site_assets: SiteAsset[];
  directus_files: DirectusFile[];
};

// Collections with m2m relationships
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

export default dbClient;
