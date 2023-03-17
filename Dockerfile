FROM node:current-alpine3.14

WORKDIR /usr/src/app
VOLUME [ "/usr/src/app" ]
ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]

