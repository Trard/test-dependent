# syntax=docker/dockerfile:1
FROM alpine:3.11 
FROM node:16-alpine3.11

WORKDIR /CICD-tests
COPY . /CICD-tests

RUN cd /CICD-tests
RUN npm install --only=prod

CMD npm run start
