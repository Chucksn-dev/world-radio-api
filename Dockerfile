FROM node:18.17.1-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE $PORT
CMD [ "npm", "start" ]
