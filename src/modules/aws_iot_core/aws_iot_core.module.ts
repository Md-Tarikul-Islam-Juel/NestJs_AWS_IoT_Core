import { LoggerModule } from "../logger/logger.module";
import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { HttpModule } from "@nestjs/axios";
import { SmartPlugController } from "./controllers/aws_iot_core.controller";
import { AwsIotCoreGateway } from "./gateway/aws_iot_core.gateway";
import { Aws_IoT_Core_Publish_Service } from "./services/aws_iot_core_publish_only.service";
import { AwsIotCoreService } from "./services/aws_iot_core.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    LoggerModule,
    HttpModule,
  ],
  controllers: [SmartPlugController],
  providers: [SmartPlugController, AwsIotCoreService, Aws_IoT_Core_Publish_Service, AwsIotCoreGateway],
})
export class AwsIotCoreModule {}
