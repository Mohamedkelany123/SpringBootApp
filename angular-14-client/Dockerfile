#BUILD FRONTEND CONTAINER IMAGE
FROM node:18.12.1-alpine as build
WORKDIR /dist/src/app
COPY . /dist/src/app
RUN npm install
RUN npm run build --prod

#DEPLOY THE IMAGE
FROM nginx:1.17.1-alpine
COPY --from=build /dist/src/app/dist/my-angular-project /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
