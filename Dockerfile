# Base image
FROM node:20-alpine

WORKDIR /nest

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

CMD [ "npm", "run", "start:prod" ]
