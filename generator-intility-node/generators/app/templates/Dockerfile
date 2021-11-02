# Build image.
FROM node:14-alpine as build

WORKDIR /usr/app

COPY . .

RUN npm install
RUN npm run compile

# Runtime image
FROM node:14-alpine as runtime

WORKDIR /usr/app

# Copy only neccesary files.
COPY --from=build /usr/app/build ./build
COPY --from=build /usr/app/node_modules ./node_modules
COPY --from=build /usr/app/package.json .

USER node

WORKDIR /usr/app

CMD ["node", "build/src/index.js"]
EXPOSE 3000