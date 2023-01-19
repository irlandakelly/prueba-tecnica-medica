FROM node:16.17.0
COPY . /usr/src/app
WORKDIR /usr/src/app
COPY package*.json .env ./
RUN npm install
COPY . .
EXPOSE 3000
CMD npm run dev