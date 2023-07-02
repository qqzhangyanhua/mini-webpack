import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, SetMetadata } from '@nestjs/common';
import { GuardService } from './guard.service';
import { CreateGuardDto } from './dto/create-guard.dto';
import { UpdateGuardDto } from './dto/update-guard.dto';
import { RoleGuard } from './role/role.guard';
import {Role} from './role/role.decorator'
import { ApiOperation, ApiTags,ApiParam, ApiQuery, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
@Controller('guard')
@ApiBearerAuth()  //添加token验证
@ApiTags('守卫接口')
@UseGuards(RoleGuard)  //非全局用法
export class GuardController {
  constructor(private readonly guardService: GuardService) {}

  @Post()
  @ApiOperation({summary:'post接口描述',description:'post接口详细描述'})  //添加接口描述
  create(@Body() createGuardDto: CreateGuardDto) {
    return this.guardService.create(createGuardDto);
  }

  @Get()
  @Role('admin') //非全局用法
  @ApiOperation({summary:'获取所有守卫'})  //添加接口描述
  @ApiQuery({name:'role',description:'name描述',required:false,type:String})  //添加接口描述
  @ApiResponse({status:200,description:'成功描述',type:String})  //添加接口描述
  findAll() {
    return this.guardService.findAll();
  }

  @Get(':id')
  @ApiParam({name:'id',description:'id描述',required:true,type:String})  //添加接口描述
  findOne(@Param('id') id: string) {
    return this.guardService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGuardDto: UpdateGuardDto) {
    return this.guardService.update(+id, updateGuardDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.guardService.remove(+id);
  }
}
