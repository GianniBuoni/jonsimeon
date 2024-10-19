FROM node:18-alpine AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
WORKDIR app/

RUN corepack enable pnpm
ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0

ARG APP_NAME
ENV APP_NAME ${APP_NAME}

FROM base AS pruning
RUN pnpm add -g turbo@^2
COPY . .
RUN turbo prune @jonsimeon/${APP_NAME} --docker

FROM base AS build
COPY --from=pruning /app/out/json .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY --from=pruning /app/out/full .
RUN pnpm turbo build --filter=@jonsimeon/${APP_NAME}

FROM base AS production
ENV NODE_ENV=production
COPY --from=pruning /app/out/json .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

FROM base AS runtime
USER node

COPY --from=build /app/apps/${APP_NAME}/dist/ ./dist
COPY --from=production /app/node_modules/ ./node_modules
CMD node ./dist/server/entry.mjs
