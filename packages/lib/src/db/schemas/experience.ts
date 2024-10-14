import type { IconBadge } from "@lib/db/directus";

export type Experience = {
  title: string;
  position: string;
  start_year: number;
  end_year: number | undefined;
  body: string;
  skills: number[] | ExpsIconBadges[];
};

export type ExpsIconBadges = {
  id: number;
  experience_id: string[] | Experience;
  icon_badge_id: string[] | IconBadge;
};
