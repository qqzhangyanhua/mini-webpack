import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import { Request, Response, NextFunction } from 'express';
import * as cors from 'cors';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
function middleware(req: Request, res: Response, next: NextFunction) {
  console.log('全局中间件==', req.originalUrl);
  next();
}

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(cors()); //解决跨域的问题
  app.use(middleware);
  app.use(
    session({
      secret: '111',
      rolling: true,
      name: 'nestId',
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      },
    }),
  );
app.useStaticAssets(join(__dirname,'images'),{
  prefix:'/images'
})
  await app.listen(3000);
}
bootstrap();
