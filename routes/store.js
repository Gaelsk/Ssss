const express = require("express");
const router = express.Router();
const {
  create_page,
  update_page,
  delete_page,
  get_page,
} = require("../handlers/page");
const { create_store } = require("../handlers/store");

//create store
router.post("/signup", create_store);

//get page
router.get("/:shop_name/pages/:pageId", get_page);

//create page
router.post("/:shop_name/pages", create_page);

module.exports = router;
