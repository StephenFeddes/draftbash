# Use an official Node.js runtime as a base image
FROM node:20

# Set the working directory inside the container
WORKDIR /app

# Copy shared dependencies from the root
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# For each module, copy its package.json and install dependencies
# Adjust the paths accordingly based on your actual project structure
COPY packages/*/package*.json ./packages/
RUN npm install --prefix ./packages/

# Repeat the above lines for each module

# Compile TypeScript code
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]