FROM node:10.13.0

WORKDIR /usr/src/services/users/

COPY ./package* /usr/src/services/users/

RUN npm install

COPY . /usr/src/services/users/

EXPOSE 5000

CMD [ "./docker-utils/wait-for-it.sh", "db:5432", "--", "bash", "./docker-utils/entry.dev.sh" ]