import { IResolvers } from "apollo-server";

const resolvers: IResolvers = {
	Query: {
		hello: (_, { name }) => name ? `Hello ${name}!` : `Hello!`,
	},
};

export default resolvers;
