FROM node:14.15-alpine

WORKDIR /app

# Setup node
ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

# Installing packages
COPY package.json /app/
COPY package-lock.json /app/
RUN npm install

# Folders
COPY .babelrc ./
COPY .eslintrc ./
COPY ts*.json ./
COPY dist ./dist
COPY public ./public
COPY src ./src

# Envs
ENV APP_NAME games-collection
ENV DEBUG games-collection:*
ENV LOG_LEVEL info
ENV MONGO_URI mongodb://mongo/games
ENV NODE_PATH ./src
ENV PORT 5000

# Port to expose
EXPOSE $PORT

CMD [ "npm", "start" ]
