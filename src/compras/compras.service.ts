import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
import { Compra } from './entities/compra.entity';

@Injectable()
export class ComprasService {

  constructor(
    @InjectRepository(Compra)
    private compraRepository: Repository<Compra>,
  ) {}

  create(createCompraDto: CreateCompraDto) {
    return this.compraRepository.save(createCompraDto)
  }

  findAll() {
    return this.compraRepository.find();
  }

  findOne(id: number) {
    return this.compraRepository.find({
      relations: {
        items: true
      },
      where: {
        id: id
      }
    })
  }

  update(id: number, updateCompraDto: UpdateCompraDto) {
    return this.compraRepository.update(id, updateCompraDto);
  }

  remove(id: number) {
    return this.compraRepository.delete(id);
  }
}
