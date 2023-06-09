import { Field, ObjectType } from "@nestjs/graphql";
import { Table, Column, Model } from "sequelize-typescript";

@ObjectType()
@Table({ tableName: 'order' })
export class Order extends Model {
    @Field()
    @Column({
        primaryKey: true
    })
    id: number
    
    @Field()
    @Column
    status_id: string

    @Field()
    @Column
    address_id: string

    @Field()
    @Column
    creation_date: Date

    @Field()
    @Column
    value: number
}