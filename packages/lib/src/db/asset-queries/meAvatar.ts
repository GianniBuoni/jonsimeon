import { readItems } from "@directus/sdk";
import dbClient from "@lib/db/directus";

const request = await dbClient.request(
  readItems("site_assets", {
    fields: [{ image: ["id", "description"] }],
    filter: { title: { _eq: "me-avatar" } },
    limit: 1,
  }),
);

export const meAvatar = request[0].image;