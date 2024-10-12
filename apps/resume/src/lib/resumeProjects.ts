import { readSingleton, readItem } from "@directus/sdk";
import dbClient from "@lib/db/directus";
import { env } from "@lib/sharedEnv";

const assets = env.PUBLIC_ASSETS;

const resumeProjectIds = await dbClient.request(
  readSingleton("resume", {
    fields: [{ projects: ["projects_id"] }],
  }),
);

export const resumeProjects = await Promise.all(
  resumeProjectIds.projects!.map(
    async (id) =>
      await dbClient.request(
        readItem("projects", id.projects_id, {
          fields: ["*", { hero_image: ["id", "description"] }],
        }),
      ),
  ),
);

export const heroImages = resumeProjects.map((project) => ({
  id: project.hero_image.id,
  src: assets + "/" + project.hero_image.id,
  alt: project.hero_image.description!,
}));
