import { Request, Response } from 'express';

import { ImportCategoryUseCAse } from './ImportCategoryUseCase';

class ImportCategoryController {
  constructor(private importCategoryUseCAse: ImportCategoryUseCAse) {}

  handle(request: Request, response: Response): Response {
    const { file } = request;
    this.importCategoryUseCAse.execute(file);

    return response.send();
  }
}

export { ImportCategoryController };
