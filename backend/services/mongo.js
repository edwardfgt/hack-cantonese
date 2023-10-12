require("dotenv").config();
const mongoose = require("mongoose");
const mongoPW = process.env.mongoPW;
const conn_str = `mongodb+srv://edward:${mongoPW}@serverlessinstance0.imzzdiy.mongodb.net/?retryWrites=true&w=majority`;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function mongoConnect() {
  await mongoose.connect(conn_str, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
