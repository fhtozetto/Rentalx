import { container } from 'tsyringe';

import { UserRepository } from '@modules/accounts/infra/typeorm/repositories/UsersRepository';
import { IUserRepository } from '@modules/accounts/repositories/IUsersRepository';
import { CarsRepository } from '@modules/cars/infra/repositories/CarsRepository';
import { CategoriesRepository } from '@modules/cars/infra/repositories/CategoriesRepository';
import { SpecificationsRepository } from '@modules/cars/infra/repositories/SpecificationsRepository';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';
import { ICategoriesRepository } from '@modules/cars/repositories/ICategoriesRepository';
import { ISpecificationRepository } from '@modules/cars/repositories/ISpecificationsRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<ISpecificationRepository>(
  'SpecificationRepository',
  SpecificationsRepository,
);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<ICarsRepository>('CarsRepository', CarsRepository);
