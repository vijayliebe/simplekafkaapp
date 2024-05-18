const { kafka } = require("./client");

async function init() {
  const admin = kafka.admin();
  try {
    console.log("Admin connecting...");
    await admin.connect();
    console.log("Admin Connection Successful...");

    console.log("Creating Topic [rider-updates]");
    await admin.createTopics({
      topics: [
        {
          topic: "rider-updates",
          numPartitions: 2,
        },
      ],
    });
    console.log("Topic Created Successfully [rider-updates]");
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  } finally {
    console.log("Disconnecting Admin..");
    await admin.disconnect();
  }
}

init();