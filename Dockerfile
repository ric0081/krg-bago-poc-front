FROM node:lts-bullseye as build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
COPY .env.local .env
RUN npm run build

FROM nginx:alpine
ADD ./config/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /var/www/app
EXPOSE 5172
CMD ["nginx", "-g", "daemon off;"]