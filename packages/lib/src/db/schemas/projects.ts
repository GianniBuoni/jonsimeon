import type { DirectusFile } from "@directus/sdk";
import type { IconBadge } from "#db/index";

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  body: string;
  hero_image: DirectusFile;
  carousel_image: number[] | ProjectsFiles[];
  links: number[] | ProjectsBadges[];
  tags: "csv";
};

export type ProjectsFiles = {
  id: number;
  projects_id: string | Project;
  directus_files_id: string | DirectusFile;
};

export type ProjectsBadges = {
  id: number;
  projects_id: string | Project;
  icon_badge_id: string | IconBadge;
};
