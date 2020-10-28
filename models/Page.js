const mongoose = require("mongoose");

const PageSchema = mongoose.Schema({
  name: { type: String, required: true },
  shop: { type: mongoose.Schema.Types.ObjectId, ref: "Store" },
  components: { type: Array },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Page", PageSchema);
