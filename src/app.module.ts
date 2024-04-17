import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { ConfigModule } from "@nestjs/config";

import { AwsIotCoreModule } from "./modules/aws_iot_core/aws_iot_core.module";
import { LoggerModule } from "./modules/logger/logger.module";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), LoggerModule, ScheduleModule.forRoot(), AwsIotCoreModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
