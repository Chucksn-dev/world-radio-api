FROM node:18.17.1-alpine

RUN npm install -g nodemon

WORKDIR /radioapp/api

COPY package.json ./

RUN npm install

COPY ./ ./

EXPOSE 4000

CMD [ "npm", "run", "dev" ]