FROM node:22-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
WORKDIR /app
ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

FROM base AS deps
RUN corepack enable
ARG APP_NAME
ENV APP_NAME ${APP_NAME}

# Copy main package
COPY package*.json .
COPY pnpm-lock.yaml .
COPY pnpm-workspace.yaml .

# Copy the app package
COPY apps/${APP_NAME}/package.json ./apps/${APP_NAME}/package.json

# Copy shared code packages
COPY packages/. ./packages/.
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile
COPY apps/${APP_NAME}/ ./apps/${APP_NAME}/

FROM deps AS runtime
RUN pnpm nx run-many -t build -p @jonsimeon/${APP_NAME}
CMD node apps/${APP_NAME}/dist/server/entry.mjs

