# user-service

> Simple user service made with Graphql

## Install
Only need pull the docker image: glopezep/users

## Configuration
```bash
  app:
    image: glopezep/users
    ports:
      - 5000:5000
    depends_on:
      - db
    environment:
      - DB_HOST=db
      - DB_NAME=production
      - DB_USERNAME=production
      - DB_PASSWORD=production
```

## License
MIT © [Guillermo López](http://web.guillermolopez.net)