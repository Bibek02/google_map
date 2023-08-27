# Start your image with a node base image
FROM cypress/browsers:node-18.16.0-chrome-112.0.5615.121-1-ff-112.0.1-edge-112.0.1722.48-1
# Create the folder where our project will be stored
RUN mkdir /google_maps_auto
# The /app directory should act as the main application directory
WORKDIR /google_maps_auto

# Copy the app package and package-lock.json file
COPY ./package.json .
COPY ./cypress.config.ts .
COPY ./tsconfig.json .
COPY ./cypress ./cypress

# Copy local directories to the current local directory of our docker image (/app)
#COPY ./src ./src
#COPY ./public ./public

# Install node packages, install serve, build the app, and remove dependencies at the end
RUN npm install

EXPOSE 3000

# Executable commands the container will use[Exec Form]
ENTRYPOINT [ "npx", "cypress", "run" ]

# Start the app using serve command
CMD []


#Instruction for run in docker:
#1. docker build -t google_maps_auto_image:1.1.1
#2. docker run -i -v ./google_maps_auto -t google_maps_auto_image:1.1.1 --env version="pol"