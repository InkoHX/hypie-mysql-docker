FROM node:12-alpine

LABEL maintainer="InkoHX <inkohx@gmail.com>"

COPY . /app/hypie

WORKDIR /app/hypie

RUN yarn --ignore-optional && \
  yarn run compile && \
  yarn --production --ignore-optional

ENTRYPOINT [ "node", "-r", "dotenv-safe/config", "./dist/bot.js" ]
