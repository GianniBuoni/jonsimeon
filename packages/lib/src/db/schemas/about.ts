export type About = {
  id: string;
  section: number[] | AboutSection[];
};

export type AboutSection = {
  id: number;
  heading: string;
  body: string;
  about_id: string;
};
