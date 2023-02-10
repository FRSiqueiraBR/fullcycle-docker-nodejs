FROM node:lts-alpine3.17

WORKDIR /app

COPY ./*.js ./
COPY ./*.json ./

EXPOSE 3000

RUN npm install

CMD ["node", "server.js"]