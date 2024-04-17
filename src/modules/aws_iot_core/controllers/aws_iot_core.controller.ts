import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AwsIotCoreService } from "../services/aws_iot_core.service";
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AwsIotCoreRequestDto } from "../dto/aws_iot_core_request.dto";
import { AwsIotCoreFailResponseDto, AwsIotCoreSuccessResponseDto } from "../dto/aws_iot_core_response.dto";

@ApiTags("AWS IoT Core")
@Controller("aws_iot_core")
export class SmartPlugController {
  constructor(private readonly awsIotCoreService: AwsIotCoreService) {}

  @HttpCode(HttpStatus.OK)
  @Post("publish")
  @ApiOperation({ summary: "AWS IoT Core data publish" })
  @ApiBody({ type: AwsIotCoreRequestDto })
  @ApiResponse({
    status: HttpStatus.OK,
    description: "Data published to AWS IoT Core successfully",
    type: AwsIotCoreSuccessResponseDto
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: "Failed to publish data to AWS IoT Core",
    type: AwsIotCoreFailResponseDto
  })
  async publish_to_aws_iot_core(@Body() body: AwsIotCoreRequestDto) {
    return await this.awsIotCoreService.publish_to_aws_iot_core(body);
  }
}
