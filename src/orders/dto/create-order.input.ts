import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class CreateOrderInput {
    @Field(() => Int)
    id: number
    
    @Field(() => String)
    status_id: string

    @Field(() => String)
    address_id: string

    @Field(() => Date)
    creation_date: Date

    @Field(() => Number)
    value: number
}
