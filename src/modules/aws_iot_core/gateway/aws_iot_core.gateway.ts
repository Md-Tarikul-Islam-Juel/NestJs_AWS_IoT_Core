import { OnModuleInit, Injectable } from "@nestjs/common";
import * as AWSIoTDeviceSDK from "aws-iot-device-sdk";
import { v4 as uuidv4 } from "uuid";

import { LoggerService } from "../../logger/services/logger.service";

@Injectable()
export class AwsIotCoreGateway implements OnModuleInit {
  private device: AWSIoTDeviceSDK.Device;

  constructor(
    private logger: LoggerService
  ) {
  }

  async onModuleInit() {
    try {
      this.initializeMqtt();
    } catch (mqttError) {
      this.logger.error(`${mqttError} `, `${this.constructor.name}.onModuleInit():`);
    }
  }

  private initializeMqtt() {
    this.device = AWSIoTDeviceSDK.device({
      clientId: `nest-js-client_xyz_${uuidv4()}`,
      protocol: "wss",
      port: 443,
      host: process.env.AWS_ENDPOINT,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      autoResubscribe: true,
      protocolVersion: 5
    });

    this.device
      .on("connect", () => {
        this.logger.info("****************************", `${this.constructor.name}.initializeMqtt():`);
        this.logger.info("Connected to AWS IoT Core", `${this.constructor.name}.initializeMqtt():`);
        this.logger.info("****************************", `${this.constructor.name}.initializeMqtt():`);

        this.device.subscribe("#");
        // this.device.subscribe("xyz/publish/#");
        // this.device.subscribe("$aws/events/presence/disconnected/#");
        // this.device.subscribe("$aws/events/presence/connected/#");
      })
      .on("message", (topic: string, payload: Buffer) => {
        //here we are listening AWS IoT Core subscribe data
        this.logger.info(`Received message ${topic} ${payload.toString()}`, `${this.constructor.name}.onModuleInit():`);

        // if (topic.startsWith("xyz/publish/")) {
        //   const modifiedTopic = topic.replace("xyz/publish/", "");
        //   this.logger.info(`Received message ${modifiedTopic} ${payload.toString()}`, `${this.constructor.name}.onModuleInit():`);
        // }
      })
      .on("close", () => {
        this.logger.info("****************************", `${this.constructor.name}.initializeMqtt():`);
        this.logger.info(
          "Connection to AWS IoT Core closed. Attempting to reconnect...",
          `${this.constructor.name}.initializeMqtt():`
        );
        this.logger.info("****************************", `${this.constructor.name}.initializeMqtt():`);
      });
  }

  //================================================================
  //-----------------------------MQTT-------------------------------
  //================================================================
  //our server --> AWS IoT core
  async publishToAws(topic: string, body: any): Promise<boolean> {
    // topic = `sp/subscribe/${topic}`;
    try {
      this.device.publish(`${topic}`, JSON.stringify(body));
      this.logger.info(`Published to topic ${topic}`, `${this.constructor.name}.publishToAws():`);
      return true;
    } catch (error) {
      this.logger.error(
        `Error publishing to topic ${topic} ${error}`,
        `${this.constructor.name}.publishToAws():`
      );
      return false;
    }
  }
}
