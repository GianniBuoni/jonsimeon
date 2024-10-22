import type { IconBadge } from "#db/index";

export type Experience = {
  title: string;
  position: string;
  start_year: number;
  end_year: number | undefined;
  body: string;
  skills: number[] | ExpsBadges[];
};

export type ExpsBadges = {
  id: number;
  experience_id: string | Experience;
  icon_badge_id: string | IconBadge;
};
