FROM node:14

WORKDIR /restAPI
COPY package.json .
RUN npm install
COPY . .
CMD npm start