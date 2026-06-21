FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN chown -R node:node /app

USER node

EXPOSE 4321

CMD ["npm", "run", "dev", "--", "--host"]
