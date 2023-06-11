import { Field, ID, InputType, Int } from "@nestjs/graphql";

@InputType()
export class CreateOrderInput {
    @Field(() => ID)
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
