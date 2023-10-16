FROM node:18-alpine
WORKDIR /app/vue-client
COPY package.json .
RUN npm i
COPY . .
EXPOSE 8080
CMD ["npm", "serve"]