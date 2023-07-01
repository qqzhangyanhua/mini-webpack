import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MulterService } from './multer.service';
import { CreateMulterDto } from './dto/create-multer.dto';
import { UpdateMulterDto } from './dto/update-multer.dto';

@Controller('multer')
export class MulterController {
  constructor(private readonly multerService: MulterService) {}

  @Post()
  create(@Body() createMulterDto: CreateMulterDto) {
    return this.multerService.create(createMulterDto);
  }

  @Get()
  findAll() {
    return this.multerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.multerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMulterDto: UpdateMulterDto) {
    return this.multerService.update(+id, updateMulterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.multerService.remove(+id);
  }
}
