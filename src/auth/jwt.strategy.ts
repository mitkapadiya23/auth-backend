import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  //   private readonly logger = new Logger(JwtStrategy.name);

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'your_jwt_secret', // Use a secure secret in production
    });
  }

  async validate(payload: any) {
    // this.logger.debug(`JWT payload received: ${JSON.stringify(payload)}`);
    // console.log('test');

    return { userId: payload.sub, email: payload.email };
  }
}
