import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { ConfigModule } from "@nestjs/config";

import { AwsIotCoreModule } from "./modules/aws_iot_core/aws_iot_core.module";
import { PrismaModule } from "./modules/prisma/prisma.module";
import { LoggerModule } from "./modules/logger/logger.module";


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    LoggerModule,
    ScheduleModule.forRoot(),
    AwsIotCoreModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
}