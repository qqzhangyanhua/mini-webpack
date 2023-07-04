import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { GraphqlService } from './graphql.service';
import { CreateGraphqlDto } from './dto/create-graphql.dto';
@Resolver()
export class GraphqlResolver {
  constructor(private readonly graphqlService: GraphqlService) {}

  @Mutation(() => Boolean)
  async create(@Args('params') params: CreateGraphqlDto): Promise<boolean> {
    return true;
  }
//   @Query(() => Boolean)
//   async findAll(): Promise<boolean> {}
}
