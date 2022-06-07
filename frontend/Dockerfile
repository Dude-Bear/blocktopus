FROM node:16 as build
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY ./ ./
EXPOSE 30000
CMD ["npm", "start"]