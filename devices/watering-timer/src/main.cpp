#include <Arduino.h>
#include "RestClient.h"
#include <ArduinoJson.h>

#define LED_OUT 4
#define SECOND 1000
#define MINUTE 60 * SECOND

#define ON_CHECK 10 * SECOND
#define OFF_CHECK 5 * MINUTE

RestClient client = RestClient(SERVER_HOST, SERVER_PORT);
/**
* String buffer to read http body
**/
String response;

int dryStatus = 0;

void setup() {
  Serial.begin(9600);
  Serial.println("Connect to WiFi network");
  client.begin(WIFI_SSID, WIFI_KEY);
  Serial.print("ESP SerialId : ");
  Serial.println(ESP.getChipId());
  Serial.println("Init pin modes.");
  pinMode(LED_OUT, OUTPUT);
  Serial.println("Setup!");
}

void loop(){

    // reset tmp vars
    dryStatus = 0;
    response = "";

    // update dry status
    Serial.println("GET ");
    client.setHeader("X-Device-ID: 1190842");
    int statusCode = client.get("/api/devices/1190842", &response);
    Serial.print("Status code from server: ");
    Serial.println(statusCode);
    if(statusCode == 200){
      Serial.print("Response : ");
      Serial.println(response);
      StaticJsonBuffer<200> jsonBuffer;
      JsonObject& root = jsonBuffer.parseObject(response);
      // Test if parsing succeeds.
      if (root.success()) {
        int status = root["status"];
        Serial.print("status : ");
        Serial.println(status);
        dryStatus = status ? status : 0;
      }
    }

    // switch dry system on or off
    Serial.print("Dry system is : ");
    Serial.println(dryStatus == 1 ? "on" : "off");
    digitalWrite(LED_OUT, dryStatus == 1 ? HIGH : LOW);

    if(dryStatus == 1){
      Serial.print("update status in ");
      Serial.print(ON_CHECK);
      Serial.println("ms");
      delay(ON_CHECK);
    } else {
      Serial.print("deep sleep for ");
      Serial.print(OFF_CHECK);
      Serial.println("ms");
      ESP.deepSleep(OFF_CHECK * 1000);
    }
}
