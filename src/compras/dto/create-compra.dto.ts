import { Item } from "src/items/entities/item.entity";

export class CreateCompraDto {

    id: number;
    dataCompra: Date;
    totalCompra: number;
    items: Item[];
}
