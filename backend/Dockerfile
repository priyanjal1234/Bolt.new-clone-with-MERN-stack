FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy all application files into the container
COPY . .

# Expose the port your app uses (optional)
EXPOSE 3000

# Start the app
CMD ["node", "app.js"]
