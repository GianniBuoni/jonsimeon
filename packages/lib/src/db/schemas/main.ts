import type { IconBadge, Project } from "#db/index";

export type Main = {
  id: string;
  toc: number[] | MainBadges[];
  projects: number[] | MainProjects[];
};

export type MainBadges = {
  id: number;
  main_id: string | Main;
  icon_badge_id: string | IconBadge;
};

export type MainProjects = {
  id: number;
  main_id: string | Main;
  projects_id: string | Project;
};
