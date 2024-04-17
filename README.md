
# NestJS AWS IoT Core Boilerplate

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>


![Version](https://img.shields.io/github/v/tag/Md-Tarikul-Islam-Juel/NestJs_AWS_IoT_Core?label=version&color=blue)
![Release](https://img.shields.io/github/v/release/Md-Tarikul-Islam-Juel/NestJs_AWS_IoT_Core?label=release&color=blue)
![Issues](https://img.shields.io/github/issues/Md-Tarikul-Islam-Juel/NestJs_AWS_IoT_Core?color=red)



The **NestJS AWS IoT Core Boilerplate** is designed to simplify the integration of **AWS IoT Core** with **NestJS** applications. This boilerplate facilitates secure device-to-cloud and cloud-to-device communication, supporting both MQTT protocols for real-time messaging and device management.



## 🚀 Key Features: Boost your project speed 

| Feature                | Description                                                                                           |
|------------------------|-------------------------------------------------------------------------------------------------------|
| **Publish Message**    | Seamlessly publish messages to your IoT devices or other systems via AWS IoT Core broker using MQTT   |
| **Subscribe Message**  | Efficiently receive and handle messages from IoT devices or other systems for real-time updates.      |




## 📖 Swagger Documents:

<img src="" alt="swagger" style="display: block; margin: auto;">

## 📁 Project contents:
- **Code**: Contains the source code for your project, including all necessary files and modules.
- **Postman Collection**: Provides pre-configured requests for testing and interacting with your API endpoints in documents folder.
- **Swagger Documentation (API Documentation)**:
Generates interactive documentation describing your API endpoints, request parameters, response formats, and authentication methods.
Accessible at **http://localhost:3000/api**



## 🚴🏿 Setup Instructions:

1. **Clone the Repository:**
   - Download or clone the repository to your local machine.

2. **Create Environment File:**
   - Navigate to the root directory.
   - Create a `.env` file based on `.env.example`.
   - Modify the variables in `.env` according to your configuration.

3. **Install Dependencies:**
   - Open your terminal.
   - Run `yarn install` or `npm install` to install project dependencies.

4. **Import Postman Collection:**
   - Locate `NestJs_webSocket.postman_collection.json` in `documents/postman/`.
   - Import the collection into Postman.

5. **Run the Project:**
   - Start the project with `npm start` or `yarn start` in the terminal.

6. **Access Swagger Documentation:**
   - Open `http://localhost:3000/api` in your web browser to view the Swagger documentation.

7. **postman -> server -> aws iot core:**
   - Open your postman and aws iot core(MQTT Client Test) and subscribe your topic or # to receive data.

8. **server <- aws iot core:**
   - Publish data from AWS IoT Core(MQTT Client Test) and observe your server terminal then you will find your message.


## 📖 Example:

1. **postman -> server -> aws iot core**
<img src="" alt="aws" style="display: block; margin: auto;">
<img src="" alt="aws" style="display: block; margin: auto;">

2. **server <- aws iot core**
<img src="" alt="aws" style="display: block; margin: auto;">
<img src="" alt="aws" style="display: block; margin: auto;">