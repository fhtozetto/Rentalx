import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

import { UserRepository } from '../modules/accounts/repositories/implementations/UsersRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new Error('Token missing');
  }

  const [, token] = authHeader.split(' ');

  try {
    const { sub: user_id } = verify(
      token,
      '94d36da456061600c0f27ca5d24a8c0e',
    ) as IPayload;

    const usersRepository = new UserRepository();
    const user = usersRepository.findById(user_id);

    if (!user) {
      throw new Error('User not exists!');
    }

    next();
  } catch {
    throw new Error('Invalid token!');
  }
}
