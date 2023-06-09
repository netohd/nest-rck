import { UUID } from "crypto";
import { Table, Column, DataType, Model } from "sequelize-typescript";

@Table({ tableName: 'order' })
export class Order extends Model {
    @Column({ 
        type: DataType.INTEGER,
        primaryKey: true
    })
    id: number
    
    @Column({
        type: DataType.STRING
    })
    status_id: string

    @Column({
        type: DataType.UUID
    })
    address_id: string

    @Column({
        type: DataType.DATE
    })
    creation_date: Date

    @Column({
        type: DataType.NUMBER
    })
    value: number
}