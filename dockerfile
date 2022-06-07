FROM node:alpine as builder
COPY package.json package-lock.json ./
RUN npm install && mkdir /react-dashboard && mv ./node_modules ./react-dashboard
WORKDIR /react-dashboard
COPY . . 
RUN npm run build

FROM nginx:latest
COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /react-dashboard/build /usr/share/nginx/html
EXPOSE 3000 
ENTRYPOINT ["nginx", "-g", "daemon off;"]