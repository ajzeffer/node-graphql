FROM node:10.15.0 as base
ENV CONTAINER_PATH /usr/src/app
WORKDIR $CONTAINER_PATH
COPY ./package*.json ./
COPY ./tsconfig.json ./
COPY ./app ./
RUN npm install
RUN npm run build
COPY ./dist ./



FROM node:10.15.0 as prod
ENV CONTAINER_PATH /usr/src/app
WORKDIR $CONTAINER_PATH
COPY --from=base $CONTAINER_PATH/package.json .
COPY --from=base $CONTAINER_PATH/dist ./dist
COPY --from=base $CONTAINER_PATH/node_modules ./node_modules
EXPOSE 3000
CMD ["npm","run","start"]