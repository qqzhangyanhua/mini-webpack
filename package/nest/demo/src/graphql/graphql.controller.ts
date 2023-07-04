import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GraphqlService } from './graphql.service';
import { CreateGraphqlDto } from './dto/create-graphql.dto';
import { UpdateGraphqlDto } from './dto/update-graphql.dto';

@Controller('graphql')
export class GraphqlController {
  constructor(private readonly graphqlService: GraphqlService) {}

  @Post()
  create(@Body() createGraphqlDto: CreateGraphqlDto) {
    return this.graphqlService.create(createGraphqlDto);
  }

  @Get()
  findAll() {
    return this.graphqlService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.graphqlService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGraphqlDto: UpdateGraphqlDto) {
    return this.graphqlService.update(+id, updateGraphqlDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.graphqlService.remove(+id);
  }
}
