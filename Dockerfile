FROM node:slim

WORKDIR /opt/edangi

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]