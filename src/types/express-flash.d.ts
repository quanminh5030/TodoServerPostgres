/// <reference types="express" />

/**
 * This type definition augments existing definition
 * from @types/express-flash
 */
declare namespace Express {
  export interface Request {
    flash(event: string, message: any): any;
    user?: {
      firstName: string;
      lastName: string;
      email: string;
      register: string | null;
    };
  }
}

interface Flash {
  flash(type: string, message: any): void;
}

declare module "express-flash";
