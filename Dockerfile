# stage 1 : build
FROM node:18.17.1-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
EXPOSE 4000
CMD [ "npm", "start" ]
