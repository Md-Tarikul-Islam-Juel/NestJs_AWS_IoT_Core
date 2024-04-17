import { ApiProperty } from "@nestjs/swagger";

export class AwsIotCoreSuccessResponseDto {
  @ApiProperty({ example: true, description: 'Indicates whether the publish was successful' })
  success: boolean;

  @ApiProperty({ example: 'Data published to AWS IoT Core successfully', description: 'A message describing the outcome of the operation' })
  message: string;
}

export class AwsIotCoreFailResponseDto {
  @ApiProperty({ example: true, description: 'Indicates whether the publish was unsuccessful' })
  success: boolean;

  @ApiProperty({ example: 'Data published to AWS IoT Core unsuccessfully', description: 'A message describing the outcome of the operation' })
  message: string;
}