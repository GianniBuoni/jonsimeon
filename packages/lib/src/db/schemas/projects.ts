import type { DirectusFile } from "@directus/sdk";
import type { IconBadge } from "#db/directus.ts";

export type Project = {
  id: string;
  title: string;
  subtitle?: string;
  body: string;
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
