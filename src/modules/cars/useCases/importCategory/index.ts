import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCAse } from './ImportCategoryUseCase';

const importCategoryUseCAse = new ImportCategoryUseCAse();

const importCategoryController = new ImportCategoryController(
  importCategoryUseCAse,
);

export { importCategoryController };
