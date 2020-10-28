const mongoose = require("mongoose");

const StoreSchema = mongoose.Schema({
  name: { type: String, required: true, unique: true },
  pages: [{ type: mongoose.Schema.Types.ObjectId, ref: "Page" }],
  contacts: { type: Array },
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Store", StoreSchema);
