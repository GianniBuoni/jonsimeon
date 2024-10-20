import type { IconBadge } from "#db/directus.ts";
import type { Project } from "#db/schemas/projects.ts";

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
