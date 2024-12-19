FROM --platform=arm64 node:18-slim AS base

WORKDIR /app
COPY package*.json ./
RUN npm install
# Copy the rest of your application code here
COPY . .
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=base /app/dist /usr/share/nginx/html