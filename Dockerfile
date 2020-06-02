# stage: 1 — build-react
FROM node:lts-alpine as build-react

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm i -g yarn

COPY package*.json yarn.lock ./

RUN yarn

COPY . .

RUN yarn build

# stage: 2 — serve react with nginx
FROM nginx:1.17.8-alpine

COPY --from=build-react /usr/src/app/build /usr/share/nginx/html