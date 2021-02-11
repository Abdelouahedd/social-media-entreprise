FROM node:lts-alpine

WORKDIR /usr/src
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["npm", "run", "prod"]