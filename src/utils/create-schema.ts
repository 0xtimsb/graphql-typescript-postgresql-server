import { buildSchema } from "type-graphql";

import { ChangePasswordResolver } from "../resolvers/user/change-password";
import { ForgotPasswordResolver } from "../resolvers/user/forgot-password";
import { LoginResolver } from "../resolvers/user/login";
import { LogoutResolver } from "../resolvers/user/logout";
import { MeResolver } from "../resolvers/user/me";
import { SignUpResolver } from "../resolvers/user/signup";
import { ConfirmUserResolver } from "../resolvers/user/confirm-user";

export const createSchema = () => buildSchema({
  resolvers: [
    ChangePasswordResolver,
    ForgotPasswordResolver,
    LoginResolver,
    LogoutResolver,
    MeResolver,
    SignUpResolver,
    ConfirmUserResolver
  ]
});