FROM node:10.13.0

WORKDIR /usr/src/services/users/

COPY ./utils/package* /usr/src/services/users/utils/

RUN cd /usr/src/services/users/utils/ && npm install

COPY ./utils/ /usr/src/services/users/utils/

COPY ./package* /usr/src/services/users/

RUN cd /usr/src/services/users/ && npm install

COPY . /usr/src/services/users/

EXPOSE 5000

CMD [ "./docker-utils/wait-for-it.sh", "db:5432", "--", "bash", "./docker-utils/entry.dev.sh" ]