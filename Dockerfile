FROM node:21-alpine
EXPOSE 3000

WORKDIR /app

COPY package*.json ./
RUN rm -rf node_modules & \
    npm ci

COPY . ./

CMD ["npm", "run", "docker"]