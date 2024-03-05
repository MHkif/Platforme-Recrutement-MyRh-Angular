# Fetch node image 
FROM node:20.11.0-alpine

# Set the working directory (Inside the container)
WORKDIR /app

# Copy the package.json and package-lock.json to the container
COPY package*.json ./

# Build angular application 
RUN npm install

# Copy the source code to the container
COPY . .

RUN npm run build 

# Expose the port 4200
EXPOSE 4200

# Start the application
CMD ["npm", "start"] 