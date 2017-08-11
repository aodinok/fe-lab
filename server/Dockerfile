FROM node:boron

RUN apt-get update && apt-get -y install netcat && apt-get clean

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY package-lock.json .
COPY wait-for-db.sh .

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3000
