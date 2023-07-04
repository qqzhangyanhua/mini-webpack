import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoModule } from './demo/demo.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NameUserMOdule } from './modules/user/user.module';
import { GroupsModule } from './groups/groups.module';
import { MulterModule } from './multer/multer.module';
import { UploadModule } from './upload/upload.module';
import { LoginModule } from './login/login.module';
import { SpiderModule } from './spider/spider.module';
import { GuardModule } from './guard/guard.module';
import { MysqlModule } from './mysql/mysql.module';
import { MangerModule } from './manger/manger.module';
import { GraphqlModule } from './graphql/graphql.module';
@Module({
  imports: [
    DemoModule,
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin123',
      logging: true,
      database: 'crawl',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      autoLoadEntities: true,
    }),
    NameUserMOdule,
    GroupsModule,
    MulterModule,
    UploadModule,
    LoginModule,
    SpiderModule,
    GuardModule,
    MysqlModule,
    MangerModule,
    GraphqlModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
