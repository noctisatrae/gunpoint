FROM node:latest

ADD .

RUN npm install
RUN npm start
