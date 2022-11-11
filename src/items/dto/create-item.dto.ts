import { Compra } from "src/compras/entities/compra.entity";

export class CreateItemDto {

    id: number;
    descricao: string;
    quantidade: number;
    valor: number;
    compra: Compra;

}
