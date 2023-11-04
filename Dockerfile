FROM node:21-alpine
EXPOSE 3000

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . ./

CMD ["npm", "run", "docker"]