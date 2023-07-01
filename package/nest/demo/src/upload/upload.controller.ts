import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { UploadService } from './upload.service';
import { CreateUploadDto } from './dto/create-upload.dto';
import { UpdateUploadDto } from './dto/update-upload.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { join } from 'path';
import { zip } from 'compressing';
@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('album')
  @UseInterceptors(FileInterceptor('file'))
  upload(@UploadedFile() file) {
    console.log('file', file);
    return true;
  }
  @Get('export')
  download(@Res() res) {
    const url = join(__dirname, '../images/1688220645375.jpg');
    res.download(url);
  }
  @Get('stream')
  async down(@Res() res) {
    const url = join(__dirname, '../images/1688220645375.jpg');
    const zipStream = new zip.Stream(); // 创建压缩流
    await zipStream.addEntry(url);
    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename=stream');
    zipStream.pipe(res);
  }
}
