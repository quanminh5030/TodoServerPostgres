import GoogleTokenStategy from "passport-google-id-token";
import JwtStrategy from "passport-jwt";

import userService from "../service/user.service";
import { UserType } from "../model/user.model";

const JWT_SECRET = process.env['JWT_SECRET'] as string

export const googleStrategy = new GoogleTokenStategy(
  {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  async (parsedToken: any, googleId: any, done: any) => {
    const user: UserType = {
      firstName: parsedToken.payload.given_name as string,
      lastName: parsedToken.payload.family_name as string,
      email: parsedToken.payload.email as string,
      register: parsedToken.payload.iss.split('.')[1], //Anyone has any better ideas how to retrieve this field?
    };
    const foundUser = await userService.findOrCreateUser(user);
    done(null, foundUser);
  }
);

export const jwtStrategy = new JwtStrategy.Strategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done: any) => {
    const foundUser = await userService.findByEmail(payload.email);
    done(null, foundUser);
  }
);
