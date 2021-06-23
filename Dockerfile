# syntax=docker/dockerfile:1
FROM ubuntu:20.04
FROM node:16

WORKDIR /CICD-tests
COPY . /CICD-tests

RUN cd /CICD-tests
RUN npm install

CMD npm run start
