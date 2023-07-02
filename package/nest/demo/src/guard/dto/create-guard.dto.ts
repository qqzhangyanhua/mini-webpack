import { ApiProperty } from "@nestjs/swagger";
export class CreateGuardDto {
    @ApiProperty({ description: 'name' })
    name: string;
    @ApiProperty({ description: 'age' })
    age: number;
}
