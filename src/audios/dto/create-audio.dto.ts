import { IsOptional, IsString, MinLength } from "class-validator";

export class CreateAudioDto {

    @IsString()
    @MinLength(1)
    title: string

    @IsString()
    @IsOptional()
    description?: string

}
