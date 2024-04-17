import {IsEmail, IsNotEmpty} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";



// =================================================================
//--------------------AwsIotCoreRequestDto--------------------------
// =================================================================
export class AwsIotCoreRequestDto {
  @ApiProperty({example: 'xyz', description: 'This is publish topic'})
  @IsNotEmpty({message: "Topic is required"})
  topic: string;

  @ApiProperty({example: 'This is aws iot core message', description: 'This is aws iot core message'})
  @IsNotEmpty({message: "Message is required"})
  message: string;
}
