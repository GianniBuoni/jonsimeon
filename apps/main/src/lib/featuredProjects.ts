import { dbClient } from "@jonsimeon/lib/db";
import type { MainProjects, Project } from "@jonsimeon/lib/db";
import { readSingleton } from "@directus/sdk";

const request = await dbClient.request(
  readSingleton("main", {
    fields: [
      {
        projects: [
          {
            projects_id: [
              "id",
              "slug",
              "title",
              "subtitle",
              { hero_image: ["id"] },
            ],
          },
        ],
      },
    ],
  }),
);

const reqestProjects = request.projects as MainProjects[];
export const featuredProjects = reqestProjects.map(
  (p) => p.projects_id,
) as Project[];
