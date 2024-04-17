import { BadRequestException, Injectable } from "@nestjs/common";
import { LoggerService } from "../../logger/services/logger.service";
import { Aws_IoT_Core_Publish_Service } from "./aws_iot_core_publish_only.service";
import { AwsIotCoreRequestDto } from "../dto/aws_iot_core_request.dto";

@Injectable()
export class AwsIotCoreService {

  constructor(
    private readonly aws_iot_core_publish_service: Aws_IoT_Core_Publish_Service,
    private readonly logger: LoggerService
  ) {
  }

  async publish_to_aws_iot_core(body: AwsIotCoreRequestDto) {
    try {
      await this.aws_iot_core_publish_service.publishToAws(body.topic, body);
      this.logger.info(
        "data published to aws iot core successfully",
        `${this.constructor.name}.publish_to_aws_iot_core():`
      );
      return {
        success: true,
        message: "data published to aws iot core successfully"
      };
    } catch (e) {
      this.logger.error(`Failed to publish to AWS IoT Core: ${e.message}`, `${this.constructor.name}.publish_to_aws_iot_core():`);
      throw new BadRequestException({ message: "data published to aws iot core unsuccessfully" });
    }
  }
}
