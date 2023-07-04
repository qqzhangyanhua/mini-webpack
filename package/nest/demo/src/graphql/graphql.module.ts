import { Module } from '@nestjs/common';
import { GraphqlService } from './graphql.service';
import { GraphqlController } from './graphql.controller';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
@Module({
  // imports: [
  //   GraphQLModule.forRoot({
  //     driver: ApolloDriver,
  //     autoSchemaFile: true,
  //   }),
  // ],
  controllers: [GraphqlController],
  providers: [GraphqlService],
})
export class GraphqlModule {}
