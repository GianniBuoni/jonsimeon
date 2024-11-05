import { createDirectus, rest, staticToken } from "@directus/sdk";
export type { DirectusFile } from "@directus/sdk";
import type { DirectusFile } from "@directus/sdk";
import { env } from "#sharedEnv";

// schema types
import type * as Db from "#db/index";

//variables
const directusURL = env.API_URL;
const directusToken = env.API_TOKEN;

// define client
const dbClient = createDirectus<Schema>(directusURL)
  .with(staticToken(directusToken))
  .with(rest());

// define schema
type Schema = {
  about: Db.About;
  about_section: Db.AboutSection[];
  experience: Db.Experience[];
  experience_icon_badge: Db.ExpsBadges[];
  icon_badge: Db.IconBadge[]; // Rename in the db later? Should be plural for consistency
  main: Db.Main;
  main_icon_badge: Db.MainBadges[];
  main_projects: Db.MainProjects[];
  posts: Db.Post[];
  projects: Db.Project[];
  projects_files: Db.ProjectsFiles[];
  projects_icon_badge: Db.ProjectsBadges[];
  resume: Db.Resume;
  resume_icon_badge: Db.ResumeBadges[];
  resume_projects: Db.ResumeProjects[];
  site_assets: Db.SiteAsset[];
  directus_files: DirectusFile[];
};

export default dbClient;
