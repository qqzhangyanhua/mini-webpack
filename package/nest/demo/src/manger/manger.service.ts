import { Injectable } from '@nestjs/common';
import { CreateMangerDto, TransferDto } from './dto/create-manger.dto';
import { UpdateMangerDto } from './dto/update-manger.dto';
import { Manger } from './entities/manger.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class MangerService {
  constructor(
    @InjectRepository(Manger) private readonly manger: Repository<Manger>,
  ) {}
  create(createMangerDto: CreateMangerDto) {
    const data = new Manger();
    data.name = createMangerDto.name;
    data.money = createMangerDto.money;
    return this.manger.save(data);
  }

  findAll() {
    return `This action returns all manger`;
  }

  findOne(id: number) {
    return `This action returns a #${id} manger`;
  }

  update(id: number, updateMangerDto: UpdateMangerDto) {
    return `This action updates a #${id} manger`;
  }

  remove(id: number) {
    return `This action removes a #${id} manger`;
  }
  async transfer(transferDto: TransferDto) {
    console.log('transferDto', transferDto.fromId, transferDto.toId);
    try {
      const from = await this.manger.findOne({
        where: { id: transferDto.fromId },
      });
      const to = await this.manger.findOne({
        where: { id: transferDto.toId },
      });
      return this.manger.manager.transaction(
        async (transactionalEntityManager) => {
          if (from.money >= transferDto.money) {
            transactionalEntityManager.save(Manger, {
              id: transferDto.fromId,
              money: from.money - transferDto.money,
            });
            transactionalEntityManager.save(Manger, {
              id: transferDto.toId,
              money: to.money + transferDto.money,
            });
            return {
              message: '转账成功',
            };
          } else {
            console.log('from.money=', from);
            console.log('to.-----=', to);

            return {
              code: 400,
              message: '余额不足',
            };
          }
          console.log('from', from, to);
          return 1;
        },
      );
    } catch (e) {
      console.log('e', e);
      throw new Error(e);
    }
    return `This action transfer`;
  }
}
