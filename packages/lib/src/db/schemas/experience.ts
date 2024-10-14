import type { IconBadge } from "@lib/db/directus";

export type Experience = {
  title: string;
  position: string;
  start: number;
  end: number | undefined;
  description: string;
  skills: number[] | IconBadge[];
};

export type ExpsIconBadges = {
  id: number;
  experience_id: string[] | Experience;
  icon_badge_id: string[] | IconBadge;
};
