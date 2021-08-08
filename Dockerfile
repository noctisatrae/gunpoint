FROM node:latest
WORKDIR /api

COPY package.*.json ./

RUN npm install

COPY . . 
ENV PORT=4978
EXPOSE 4978

CMD ["npm", "start']
