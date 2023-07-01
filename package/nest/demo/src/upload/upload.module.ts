import { Module } from '@nestjs/common';
import { UploadService } from './upload.service';
import { UploadController } from './upload.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname, join } from 'path';
@Module({
  imports: [MulterModule.register({
    dest: 'uploads',
    storage:diskStorage({
      destination: join(__dirname, '../images'),
      filename:(req, file, cb) => {
        const randomName = new Date().getTime()
        return cb(null, `${randomName}${extname(file.originalname)}`)
      }
    }) // 上传到本地
  })],
  controllers: [UploadController],
  providers: [UploadService]
})
export class UploadModule {}
