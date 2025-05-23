# 1. Start from a Node image to build the app
FROM node:18 AS build

# 2. Set working directory
WORKDIR /app

# 3. Copy package.json and package-lock.json (to install dependencies)
COPY package*.json ./

# 4. Install npm packages
RUN npm install

# 5. Copy all project files
COPY . .

# 6. Build the React app (creates a production-ready 'build' folder)
RUN npm run build

# 7. Now start from a fresh Nginx image
FROM nginx:alpine

# 8. Copy the build folder files into Nginx public folder
COPY --from=build /app/build /usr/share/nginx/html

# 9. Open port 80
EXPOSE 80

# 10. Start Nginx web server
CMD ["nginx", "-g", "daemon off;"]
