// db client
export { default as dbClient } from "#db/directus";

// asset queries
export { noodleAvatar } from "#db/asset-queries/noodleAvatar";
export { heroImage } from "#db/asset-queries/heroImage";
export { meAvatar } from "#db/asset-queries/meAvatar";
export { noodleFullBody } from "#db/asset-queries/noodleFullBody";

// schema types
export type { About, AboutSection } from "#db/schemas/about";
export type { DirectusFile } from "@directus/sdk";
export type { Experience, ExpsBadges } from "#db/schemas/experience";
export type { Post } from "#db/schemas/post";
export type {
  Project,
  ProjectsBadges,
  ProjectsFiles,
} from "#db/schemas/projects";
export type { Resume, ResumeBadges, ResumeProjects } from "#db/schemas/resume";
export type { IconBadge, SiteAsset } from "#db/schemas/mtm";
export type { Main, MainBadges, MainProjects } from "#db/schemas/main";
