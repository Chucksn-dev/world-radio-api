FROM node:18.17.1-alpine
WORKDIR /app
COPY middleware .
COPY models .
COPY routes .
COPY utils .
COPY package-lock.json .
COPY package.json .
COPY server.js .
RUN npm install
EXPOSE $PORT
CMD [ "npm", "start" ]
