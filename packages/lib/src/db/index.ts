// db client
export { default as dbClient } from "#db/directus";

// asset queries
export { noodleAvatar } from "#db/asset-queries/noodleAvatar";
export { heroImage } from "#db/asset-queries/heroImage";
export { meAvatar } from "#db/asset-queries/meAvatar";
export { noodleFullBody } from "#db/asset-queries/noodleFullBody";

// schema types
export type { Experience, ExpsIconBadges } from "#db/schemas/experience";
export type { Post } from "#db/schemas/post";
export type {
  Project,
  ProjectsFiles,
  ProjectsIconBadges,
} from "#db/schemas/projects";
export type { Resume, ResumeBadge, ResumeProject } from "#db/schemas/resume";
export type { SiteAsset, IconTag, IconBadge, DirectusFile } from "#db/directus";
