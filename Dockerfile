FROM node
RUN mkdir -p /appl/polymer-tinkering
WORKDIR /appl/polymer-tinkering
COPY . /appl/polymer-tinkering
EXPOSE 8081
RUN apt-get update && npm install && npm install -g polymer-cli --unsafe-perm