import { readSingleton, readItem } from "@directus/sdk";
import dbClient, { type Project } from "@lib/db/directus";

const resumeProjectIds = await dbClient.request(
  readSingleton("resume", {
    fields: [{ projects: ["projects_id"] }],
  }),
);

export const resumeProjects = (await Promise.all(
  resumeProjectIds.projects!.map(
    async (id) =>
      await dbClient.request(
        readItem("projects", id.projects_id, {
          fields: ["*", { hero_image: ["id", "description"] }],
        }),
      ),
  ),
)) as Project[];
