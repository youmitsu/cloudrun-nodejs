FROM node:14.19.3-alpine

WORKDIR /root
RUN apk add --no-cache ca-certificates git build-base

COPY . .
RUN yarn install
RUN yarn build

EXPOSE 8080

CMD [ "node", "./dist/index.js" ]