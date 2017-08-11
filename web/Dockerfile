FROM nginx

# Copy nginx config
COPY ./nginx.conf /etc/nginx/nginx.conf

# Install node.js
RUN apt-get update && apt-get -y install sudo
RUN sudo apt-get -y install curl
RUN sudo apt-get -y install gnupg2
RUN curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash - && sudo apt-get install -y nodejs

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install

# Bundle app source
COPY . .

# Build app to dist
RUN npm run build

# Copy built app files to nginx root
RUN mv ./dist/* /usr/share/nginx/html/
