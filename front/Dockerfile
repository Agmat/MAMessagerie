FROM node:alpine

EXPOSE 3000

ARG PROJECT_DIR=.
ENV HOME=/root

ENV NODE_ENV $NODE_ENV

ADD $PROJECT_DIR/package.json $HOME/ma/

WORKDIR $HOME/ma
RUN npm install --unsafe-perm --loglevel=warn --no-progress

COPY $PROJECT_DIR $HOME/ma

CMD npm start
