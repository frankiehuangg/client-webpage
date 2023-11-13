FROM node:21-alpine
EXPOSE 3000

WORKDIR /app

COPY . ./
COPY package.json ./
COPY package-lock.json ./
RUN npm i


CMD ["npm", "run", "docker"]