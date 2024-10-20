import { readItems } from "@directus/sdk";
import dbClient from "#db/directus";

const request = await dbClient.request(
  readItems("site_assets", {
    fields: [{ image: ["id", "description"] }],
    filter: { title: { _eq: "hero-image" } },
    limit: 1,
  }),
);

export const heroImage = request[0].image;
