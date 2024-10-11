import { readItems } from "@directus/sdk";
import dbClient from "@lib/db/directus";

const request = await dbClient.request(
  readItems("site_assets", {
    fields: [{ image: ["id", "description"] }],
    filter: {
      title: {
        _eq: "noodle-avatar",
      },
    },
    limit: 1,
  }),
);

const { image } = request[0];

export const noodleAvatar = image;
