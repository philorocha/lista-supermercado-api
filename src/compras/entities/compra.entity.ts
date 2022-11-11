import { Item } from "src/items/entities/item.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Compra {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({default: new Date().toLocaleString()})
    dataCompra: Date;

    @Column()
    totalCompra: number;

    @OneToMany(() => Item, (item) => item.compra)
    items: Item[];

}