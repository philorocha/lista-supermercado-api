import { Compra } from "src/compras/entities/compra.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    descricao: string;

    @Column()
    quantidade: number;

    @Column()
    valor: number;

    @ManyToOne(() => Compra, (compra) => compra.items, {onDelete: "CASCADE"})
    compra: Compra;

}
