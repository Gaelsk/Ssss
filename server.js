const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const shop_routes = require("./routes/store");

const port = process.env.PORT || 5000;

//DB
mongoose
  .connect("mongodb://localhost:27017/storify", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.error(e);
  });

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", shop_routes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
