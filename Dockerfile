# Use an official Node.js runtime as a base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the latest version of npm
RUN npm install -g npm@latest

# Install app dependencies
RUN npm install

# Install TypeScript type declarations for missing modules
RUN npm install --save-dev @types/express @types/cors @types/socket.io @types/bcryptjs @types/jsonwebtoken @types/pg

# Copy the rest of the application code
COPY . .

# Compile TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]