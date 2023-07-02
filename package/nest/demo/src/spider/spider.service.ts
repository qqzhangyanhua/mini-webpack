import { Injectable } from '@nestjs/common';
import { CreateSpiderDto } from './dto/create-spider.dto';
import { UpdateSpiderDto } from './dto/update-spider.dto';
import axios from 'axios';
import * as cheerio from 'cheerio';
import * as fs from 'fs';
import { join } from 'path';
@Injectable()
export class SpiderService {
  create(createSpiderDto: CreateSpiderDto) {
    return 'This action adds a new spider';
  }

  async findAll() {
    const urls: string[] = [];
    const baseUrl = 'https://www.xgmn02.xyz';
    const nestText = '下一页';
    let pageIndex = 0;
    const getImg = async () => {
      console.log('正在抓取页码', pageIndex);
      const body = await axios
        .get(
          `https://www.xgmn02.xyz/Xgyw/Xgyw25219${
            pageIndex ? '_' + pageIndex : ''
          }.html`,
        )
        .then(async (res) => res.data);
      const $ = cheerio.load(body);
      const page = $('.pagination').eq(0).find('a');
      const pageArray = page
        .map(function (item) {
          return $(this).text();
        })
        .toArray();
      if (pageArray.includes(nestText)) {
        $('.article-content p img').each(function (item, index) {
          const src = baseUrl + $(this).attr('src');
          urls.push(src);
        });
        pageIndex++;
        await getImg();
      }
    };
    await getImg();
    console.log('urls', urls);
    this.writeImg(urls);
    return `This action returns all spider`;
  }
  writeImg(urls: string[]) {
    urls.forEach(async (url) => {
      console.log('正在下载图片', url);
      
      const buffer = await axios
        .get(url, { responseType: 'arraybuffer' })
        .then((res) => res.data);
      const ws = fs.createWriteStream(
        join(__dirname, '../cos' + new Date().getTime() + '.jpg'),
      );
      ws.write(buffer);
      // fs.createWriteStream(join(__dirname,'../cos'+new Date().getTime()+'.jpg')).write(Buffer.from(buffer, 'binary'));
    });
  }
  findOne(id: number) {
    return `This action returns a #${id} spider`;
  }

  update(id: number, updateSpiderDto: UpdateSpiderDto) {
    return `This action updates a #${id} spider`;
  }

  remove(id: number) {
    return `This action removes a #${id} spider`;
  }
}
