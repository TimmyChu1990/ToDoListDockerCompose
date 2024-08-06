FROM node:18-alpine
WORKDIR /usr/app
COPY ./ /usr/app
RUN npm install
RUN npm install -g typescript
RUN tsc
EXPOSE 3001
CMD ["node", "./src/app.js"]
