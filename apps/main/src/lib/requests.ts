import { readSingleton } from "@directus/sdk";
import { dbClient, type MainBadges } from "@jonsimeon/lib/db";

const lRequest = await dbClient.request(
  readSingleton("main", {
    fields: [{ toc: [{ icon_badge_id: ["icon", "href", "label"] }] }],
    deep: {
      toc: { _filter: { icon_badge_id: { tags: { _icontains: "toc-link" } } } },
    },
  }),
);

export const links = lRequest.toc as MainBadges[];

const fRequest = await dbClient.request(
  readSingleton("main", {
    fields: [{ toc: [{ icon_badge_id: ["icon", "href", "label"] }] }],
    deep: {
      toc: { _filter: { icon_badge_id: { tags: { _icontains: "filter" } } } },
    },
  }),
);

export const filters = fRequest.toc as MainBadges[];
