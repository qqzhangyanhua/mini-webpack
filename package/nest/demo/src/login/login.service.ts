import { Injectable } from '@nestjs/common';
import { CreateLoginDto, SendMsgDto } from './dto/create-login.dto';
import { UpdateLoginDto } from './dto/update-login.dto';
import Dysmsapi20170525, * as $Dysmsapi20170525 from '@alicloud/dysmsapi20170525';
import OpenApi, * as $OpenApi from '@alicloud/openapi-client';
import Util, * as $Util from '@alicloud/tea-util';
import { getRandomCode } from 'src/shared/utils';
import { SIGN_NAME, TEMPLATE_CODE } from 'src/common/alyun';
@Injectable()
export class LoginService {
  create(createLoginDto: CreateLoginDto) {
    return 'This action adds a new login';
  }

  findAll() {
    return `This action returns all login`;
  }

  findOne(id: number) {
    return `This action returns a #${id} login`;
  }

  update(id: number, updateLoginDto: UpdateLoginDto) {
    return `This action updates a #${id} login`;
  }

  remove(id: number) {
    return `This action removes a #${id} login`;
  }
  async sendMsg(sendMsgDto: SendMsgDto) {
    console.log('sendMsgDto', sendMsgDto);
    const code = getRandomCode();
    const config = new $OpenApi.Config({
      // 必填，您的 AccessKey ID
      accessKeyId: 'accessKeyId',
      // 必填，您的 AccessKey Secret
      accessKeySecret: 'accessKeySecret',
    });
    config.endpoint = `dysmsapi.aliyuncs.com`;
    const client = new Dysmsapi20170525(config);
    // let client = Client.createClient(process.env['ALIBABA_CLOUD_ACCESS_KEY_ID'], process.env['ALIBABA_CLOUD_ACCESS_KEY_SECRET']);
    const sendSmsRequest = new $Dysmsapi20170525.SendSmsRequest({
      phoneNumbers: sendMsgDto.iphone,
      signName: SIGN_NAME,
      templateCode: TEMPLATE_CODE,
      templateParam: `{"code":${code}}`,
    });
    const runtime = new $Util.RuntimeOptions({});
    try {
      // 复制代码运行请自行打印 API 的返回值
      await client.sendSmsWithOptions(sendSmsRequest, runtime);
    } catch (error) {
      // 如有需要，请打印 error
      Util.assertAsString(error.message);
    }
    return '发送短信成功';
  }
}
