FROM node:22.7-alpine

RUN mkdir -p /app/ctf-result
WORKDIR /app/ctf-result
COPY package-lock.json  .
COPY package.json . 
COPY . .

RUN npm install


EXPOSE 80

CMD [ "npm", "run", "dev" ]
