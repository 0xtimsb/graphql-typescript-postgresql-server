import { buildSchema } from "type-graphql";

import { ChangePasswordResolver } from "../resolvers/user/change-password-resolver";
import { ForgotPasswordResolver } from "../resolvers/user/forgot-password-resolver";
import { LoginResolver } from "../resolvers/user/login-resolver";
import { LogoutResolver } from "../resolvers/user/logout-resolver";
import { MeResolver } from "../resolvers/user/me-resolver";
import { SignUpResolver } from "../resolvers/user/signup-resolver";
import { ConfirmUserResolver } from "../resolvers/user/confirm-user-resolver";

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