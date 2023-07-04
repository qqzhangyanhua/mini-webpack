import { PartialType } from '@nestjs/swagger';
import { CreateGraphqlDto } from './create-graphql.dto';

export class UpdateGraphqlDto extends PartialType(CreateGraphqlDto) {}
