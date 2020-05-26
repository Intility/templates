# alternatively node:8-alpine, though not that important as it is a throwaway container
FROM node:8 AS build
WORKDIR /src

# install dependencies
COPY package*.json .npmrc .
RUN npm install

# copy all files from repository and create a production build
COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged:stable-alpine AS runtime

# copy config files
COPY nginx/ /etc/nginx/

# copy build files
COPY --from=build /src/build /app
