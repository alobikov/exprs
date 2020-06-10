const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
async function start() {
  try {
    await mongoose.connect("http://localhost:21017", {
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    app.listen(PORT, () => {
      console.log("express server is running");
    });
  } catch (e) {
    console.log("catch block in function start()");
    console.log(e);
  }
}
