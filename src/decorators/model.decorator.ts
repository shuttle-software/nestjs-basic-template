import { createParamDecorator, ExecutionContext, Inject, NotFoundException } from '@nestjs/common';
import { InvalidInputException } from '@/exceptions';
import { connections, model, models } from 'mongoose';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';

export const ModelParam = createParamDecorator(

  async (data: any, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();

    const snake_case_name = data.name.split(/(?=[A-Z])/).join('_').toLowerCase();
    const model_name = data.name;    

    const param = request.params[snake_case_name];
      
    if(!param) {
      throw new InvalidInputException(`Wrong ${param} ID`);
    }
  
    let doc;
    try {
      doc = await global.$db.models[model_name].findOne({ _id: param });
    } catch (error) {
      if(error.name === 'CastError') {
        throw new InvalidInputException(`${model_name} not found`);
      } else {
        throw error;
      }
    }

    if(!doc) {
      throw new InvalidInputException(`${model_name} not found`);
    }

    return doc;
  },
);