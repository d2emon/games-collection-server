FROM node:8.11-alpine

WORKDIR /app

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package.json /app/
RUN npm install

COPY ./src /app/src

ENV PORT 5000
EXPOSE $PORT
CMD [ "npm", "start" ]
