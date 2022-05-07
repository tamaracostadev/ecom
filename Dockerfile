# syntax=docker/dockerfile:1

FROM node:12.18.1

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node"]

RUN npm run generate

RUN npm run start