ARG NODE_VERSION=20.11.1

################################################################################
# Use node image for base image for all stages.
FROM node:${NODE_VERSION}-alpine as base

# Set working directory for all build stages.
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

RUN npm install 

COPY . /usr/src/app

RUN npm run build

EXPOSE 3000

# Use production node environment by default.
ENV NODE_ENV production

CMD [ "npm", "run", "start" ]
