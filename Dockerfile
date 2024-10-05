FROM node:20-alpine
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY main-simple-calculator.js .

EXPOSE 3000

CMD [ "node", "main-simple-calculator.js" ]
