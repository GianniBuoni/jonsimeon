import type { IconBadge, Project } from "#db/index";

export type Resume = {
  id: string;
  toc: number[] | ResumeBadges[];
  projects: number[] | ResumeProjects[];
};

export type ResumeBadges = {
  id: number;
  resume_id: string | Resume;
  icon_badge_id: string | IconBadge;
};

export type ResumeProjects = {
  id: number;
  resume_id: string | Resume;
  projects_id: string | Project;
};
