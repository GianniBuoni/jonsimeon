import { readSingleton } from "@directus/sdk";
import { dbClient } from "@jonsimeon/lib/db";
import type { Project } from "@jonsimeon/lib/db";

const resume = await dbClient.request(
  readSingleton("resume", {
    fields: [
      {
        projects: [
          {
            projects_id: [
              "id",
              "title",
              "subtitle",
              "body",
              { hero_image: ["id", "description"] },
              {
                carousel_image: [{ directus_files_id: ["id", "description"] }],
              },
              { links: [{ icon_badge_id: ["icon", "href", "label"] }] },
            ],
          },
        ],
      },
    ],
  }),
);

const projects = resume.projects!.map((p) => p.projects_id);
export default projects as Project[];
