import { ArgsType, Field, Int } from "@nestjs/graphql";
import { Min } from "class-validator"

@ArgsType()
export class FindAllArgs {
    @Field(() => Int, { nullable: true })
    @Min(0)
    offset: number

    @Field(() => Int, { nullable: true })
    @Min(1)
    limit: number
}