FROM node

ENV TEST_ENV = 123

WORKDIR /app

COPY package.json .
RUN npm i

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]