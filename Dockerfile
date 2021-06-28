# Install dependencies only when needed
FROM node:15-alpine AS deps
WORKDIR /app
COPY ./package.json ./
RUN yarn install --fronzen-lockfile

FROM node:15-alpine AS runner 
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules

ENV NODE_ENV development

EXPOSE 8080

CMD ["yarn", "serve"]
