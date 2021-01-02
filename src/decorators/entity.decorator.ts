import { createParamDecorator, ExecutionContext, NotFoundException } from '@nestjs/common';

import { getRepository } from 'typeorm';

export const EntityParam = createParamDecorator(
  async (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const snake_case_name = data.name.split(/(?=[A-Z])/).join('_').toLowerCase();
    
    const repo = getRepository(data)
    const inst = await repo.findOne(request.params[snake_case_name]);

    if(!inst) {
      throw new NotFoundException('Model not found');
    }

    return inst;
  },
);