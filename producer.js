const { kafka } = require("./client");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const TOPIC = "rider-updates";
const KEY = "location-update";

async function sendMessage(producer, riderName, location) {
  const partition = location.toLowerCase() === "north" ? 0 : 1;
  const value = JSON.stringify({ name: riderName, location });

  await producer.send({
    topic: TOPIC,
    messages: [{ partition, key: KEY, value }],
  });
}

async function init() {
  const producer = kafka.producer();

  console.log("Connecting Producer");
  await producer.connect();
  console.log("Producer Connected Successfully");

  rl.setPrompt("> ");
  rl.prompt();

  rl.on("line", async (line) => {
    console.log("line ::", line);
    const [riderName, location] = line.split(" ");

    try {
      await sendMessage(producer, riderName, location);
    } catch (error) {
      console.error(`Failed to send message: ${error}`);
    }
  });

  rl.on("close", async () => {
    try {
      await producer.disconnect();
    } catch (error) {
      console.error(`Failed to disconnect producer: ${error}`);
    }
  });
}

init();
