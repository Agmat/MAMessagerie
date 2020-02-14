FROM node:alpine

EXPOSE 80

ARG PROJECT_DIR=./repository
ENV HOME=/root

ENV NODE_ENV $NODE_ENV

ADD $PROJECT_DIR/package.json $HOME/1j1v/

WORKDIR $HOME/1j1v
RUN npm install --unsafe-perm --loglevel=warn --no-progress

COPY $PROJECT_DIR $HOME/1j1v

CMD npm start
