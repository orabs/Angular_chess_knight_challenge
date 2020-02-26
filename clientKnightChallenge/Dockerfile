# Create image based on the official Node image from dockerhub
FROM node:10-alpine
# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app/client
# Change directory so that our commands run inside this new directory
RUN mkdir -p /usr/src/app/client/node_modules && chown -R node:node /usr/src/app/client

WORKDIR /usr/src/app/client
# Copy dependency definitions
COPY package.json /usr/src/app/client
# Install dependecies
RUN npm install
# Get all the code needed to run the app
COPY . /usr/src/app/client
# Expose the port the app runs in
EXPOSE 4200
# Serve the app
CMD ["npm", "start"]


