FROM node:10-alpine
WORKDIR /app

COPY ./package.json ./
RUN npm update
RUN NODE_ENV=development npm install || true


COPY . .
CMD ["npm", "run", "start"]