FROM node:12-alpine

LABEL maintainer="InkoHX <inkohx@gmail.com>"

COPY . /app/hypie

WORKDIR /app/hypie

RUN yarn && \
  yarn run compile && \
  yarn install --production

ENTRYPOINT [ "node", "-r", "dotenv-safe/config", "./dist/bot.js" ]
