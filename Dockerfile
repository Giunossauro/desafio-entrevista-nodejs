FROM node:16.18.0-alpine3.16

# RUN mkdir -p /root/.npm/_cacache/tmp
# RUN chown -R 1000:1000 /root/.npm

WORKDIR /home/node/app

COPY package*.json ./

ENV PORT 8080
ENV HOST 0.0.0.0
# ENV NODE_ENV=production

RUN apk add --no-cache bash

RUN npm install -g @nestjs/cli
EXPOSE 8080

ENTRYPOINT npm install && npm run build && npm run start:dev
# ENTRYPOINT npm ci && npm run build && npm run start:dev
# ENTRYPOINT npm ci --omit=dev && npm run build && npm run start:dev

COPY . .

USER 0
