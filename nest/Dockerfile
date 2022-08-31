# ---- BUILD IMAGE ----

FROM node:16-alpine as build

WORKDIR /usr/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Compile TypeScript files
COPY . .
RUN npm run build

# ---- RUNTIME IMAGE ----

FROM node:16-alpine as runtime

## Set time zone config for Linux image
ENV TZ="Europe/Oslo"

ARG BUILD_VERSION=unknown
ENV BUILD_VERSION=$BUILD_VERSION

WORKDIR /usr/app

# Copy built files from docker build stage
COPY --from=build /usr/app/dist ./dist
COPY --from=build /usr/app/node_modules ./node_modules
COPY --from=build /usr/app/package.json .

# Switch to non-privileged user
USER node

EXPOSE 4000

# Run command to start API
CMD ["node", "dist/src/main"]
