import { createConnection } from "typeorm";

export const testConnection = (drop: boolean = false) => {
  return createConnection({
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "postgres",
    "password": "",
    "database": "graphql-typescript-postgresql-server-test",
    "synchronize": drop,
    "dropSchema": drop,
    "entities": [__dirname + "/../entity/**/*.ts"],
  });
};