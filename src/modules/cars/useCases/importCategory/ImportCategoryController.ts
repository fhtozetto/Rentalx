import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ImportCategoryUseCAse } from './ImportCategoryUseCase';

class ImportCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const importCategoryUseCAse = container.resolve(ImportCategoryUseCAse);

    await importCategoryUseCAse.execute(file);

    return response.status(201).send();
  }
}

export { ImportCategoryController };
