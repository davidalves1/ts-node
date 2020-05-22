FROM node:alpine

WORKDIR /usr/app

RUN apk add yarn --progress

COPY $PWD/package.json .

RUN yarn 

COPY . .

EXPOSE 3333

CMD ["yarn", "dev:server"]