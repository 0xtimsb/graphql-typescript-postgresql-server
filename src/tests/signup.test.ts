import { Connection } from "typeorm";

import { testConnection } from "../test-utils/test-connection";
import { graphqlCall } from "../test-utils/grahql-call";

let connection: Connection;
beforeAll(async () => {
  connection = await testConnection();
});
afterAll(async () => {
  await connection.close();
});

const signinMutation = `
mutation Signin($data: UserInput!) {
  createUser(
    data: $data
  ) {
    username
    name
    email
    id
  }
}
`;

describe('Signup', () => {
  it('create user', async () => {
    console.log(await graphqlCall({
      source: signinMutation,
      variableValues: {
        data: {
          name: 'Smit Barmase',
          email: 's777@ouok.com',
          username: 'smitbjyjfhgfghharmase',
          password: 'dskjh77g@dgj'
        }
      }
    }));
  });
});