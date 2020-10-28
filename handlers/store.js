const Store = require("../models/Store");
const Page = require("../models/Page");
const get_default_page = require("../templates/home");

exports.create_store = async (req, res) => {
  if (req.body.name) {
    console.log(req.body);
    const new_store = await new Store({
      name: req.body.name,
    }).save();
    console.log(new_store);
    //create home page
    const default_page = get_default_page(new_store);
    const page = await new Page(default_page).save();

    const store = await Store.findByIdAndUpdate(
      new_store._id,
      {
        pages: [page._id],
      },
      { new: true }
    );

    return res.json(store);
  } else {
    return res.status(400).json({ error: "Store's name is required" });
  }
};
