import { graphql } from "graphql";
import { Maybe } from "graphql/jsutils/Maybe";

import { createSchema } from "../utils/create-schema";

interface Options {
  source: string;
  variableValues?: Maybe<{
    [key: string]: any;
  }>;
}

export const graphqlCall = async ({ source, variableValues }: Options) => {
  return graphql({
    schema: await createSchema(),
    source,
    variableValues
  });
};