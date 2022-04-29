import GoogleTokenStategy from "passport-google-id-token";
import JwtStrategy from "passport-jwt";

import userService from "../service/user.service";

export const googleStrategy = new GoogleTokenStategy(
  {
    clientId: process.env.GOOGLE_CLIENT_ID,
  },
  async (parsedToken: any, googleId: any, done: any) => {
    const foundUser = await userService.findOrCreateUserByEmail(
      parsedToken.email
    );
    done(null, foundUser);
  }
);

export const jwtStrategy = new JwtStrategy.Strategy(
  {
    secretOrKey: process.env.JWT_SECRET,
    jwtFromRequest: JwtStrategy.ExtractJwt.fromAuthHeaderAsBearerToken(),
  },
  async (payload: any, done: any) => {
    const foundUser = await userService.findByEmail(payload.email);
    done(null, foundUser);
  }
);
