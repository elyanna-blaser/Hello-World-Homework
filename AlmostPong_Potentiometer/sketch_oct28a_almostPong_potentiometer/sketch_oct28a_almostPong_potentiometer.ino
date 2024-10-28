int potPin = A0;  // Pin connected to potentiometer

void setup() {
  Serial.begin(9600);
}

void loop() {
  int potValue = analogRead(potPin);     // Read the potentiometer value (0 to 1023)
  Serial.println(potValue);              // Send the potentiometer value over serial
  delay(10);                             // Small delay for stability
}