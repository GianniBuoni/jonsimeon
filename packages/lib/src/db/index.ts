// db client
export { default as dbClient } from "#db/directus.ts";

// asset queries
export { noodleAvatar } from "#db/asset-queries/noodleAvatar.ts";
export { heroImage } from "#db/asset-queries/heroImage.ts";
export { meAvatar } from "#db/asset-queries/meAvatar.ts";
export { noodleFullBody } from "#db/asset-queries/noodleFullBody.ts";

// schema types
export type { Experience, ExpsIconBadges } from "#db/schemas/experience.ts";
export type { Post } from "#db/schemas/post.ts";
export type {
  Project,
  ProjectsFiles,
  ProjectsIconBadges,
} from "#db/schemas/projects.ts";
export type { Resume, ResumeBadge, ResumeProject } from "#db/schemas/resume.ts";
export type {
  SiteAsset,
  IconTag,
  IconBadge,
  DirectusFile,
} from "#db/directus.ts";
