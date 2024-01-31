# Use an official Node.js runtime as a base image
FROM node:20

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the root-level package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the latest version of npm
RUN npm install -g npm

# Install root-level dependencies
RUN npm install

# Copy the TypeScript configuration file
COPY tsconfig.json ./

# Copy all package.json files in the monorepo
COPY packages/*/package*.json ./packages/

# Install dependencies for each package
RUN npm install --prefix packages

# Copy the entire monorepo to the container
COPY . .

# Build the TypeScript app for each package
RUN npm run build --prefix packages

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run your application
CMD ["npm", "start"]