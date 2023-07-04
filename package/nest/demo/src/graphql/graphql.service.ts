import { Injectable } from '@nestjs/common';
import { CreateGraphqlDto } from './dto/create-graphql.dto';
import { UpdateGraphqlDto } from './dto/update-graphql.dto';

@Injectable()
export class GraphqlService {
  create(createGraphqlDto: CreateGraphqlDto) {
    return 'This action adds a new graphql';
  }

  findAll() {
    return `This action returns all graphql`;
  }

  findOne(id: number) {
    return `This action returns a #${id} graphql`;
  }

  update(id: number, updateGraphqlDto: UpdateGraphqlDto) {
    return `This action updates a #${id} graphql`;
  }

  remove(id: number) {
    return `This action removes a #${id} graphql`;
  }
}
