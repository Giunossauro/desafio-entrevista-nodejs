FROM node:16.18.0-alpine3.16 AS app
WORKDIR /home/node/app
COPY package*.json ./
ENV PORT 8080
ENV HOST 0.0.0.0
RUN apk add --no-cache bash
RUN npm install -g @nestjs/cli
EXPOSE 8080
CMD npm install && npm run build && npm run start:dev
COPY . .
USER 0
