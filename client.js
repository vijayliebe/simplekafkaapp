const { Kafka } = require("kafkajs");

exports.kafka = new Kafka({
  clientId: "simplekafkaapp",
  brokers: ["192.168.1.219:9092"],
  connectionTimeout: 3000,
  retry: {
    initialRetryTime: 100,
    retries: 8
  },
});
