# AS build - define a reference to intire build
FROM node:20-alpine3.19 AS build

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npx ngcc --properties es2023 browser module main --first-only --create-ivy-entry-points

COPY . .

RUN npm run build

FROM nginx:stable

COPY --from=build /app/dist/docker-angular-app/browser/ /usr/share/nginx/html

EXPOSE 80
