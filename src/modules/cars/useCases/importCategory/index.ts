import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCAse } from './ImportCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstance();
const importCategoryUseCAse = new ImportCategoryUseCAse(categoriesRepository);
const importCategoryController = new ImportCategoryController(
  importCategoryUseCAse,
);

export { importCategoryController };
