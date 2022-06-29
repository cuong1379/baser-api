FROM node:13-alpine

WORKDIR /app

COPY . .

RUN yarn

CMD ["yarn", "start"]