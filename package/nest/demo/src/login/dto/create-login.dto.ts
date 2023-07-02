
import { IsNotEmpty, IsNumber, IsString, Length } from "class-validator";
export class CreateLoginDto {
    @IsNotEmpty()
    @IsString()
    @Length(2,10,{
        message:'用户名长度不对'
    })
    name:string;
    @IsNotEmpty()
    @IsNumber()
    age:number;


}
