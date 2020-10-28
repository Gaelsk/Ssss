const Page = require("../models/Page");
const Store = require("../models/Store");

exports.create_page = async (req, res) => {
  if (req.body.name) {
    const new_page = await new Page({
      components: req.body.components,
      name: req.body.pageName,
      store: req.body.store_id, //req.store._id,
    });
    //update store's pages
    const store_pages = [...req.store.pages, new_page._id];
    await Store.findByIdAndUpdate(/*req.store._id*/ req.body.store_id, {
      pages: store_pages,
    });
    return res.json(new_page);
  } else {
    return res.status(400).json({ error: "Page's name is required" });
  }
};

exports.get_page = async (req, res) => {
  const page = await Page.findById(req.params.pageId);
  if (page) {
    return res.json(page);
  } else {
    return res.status(404).json({ error: "Page not found" });
  }
};

exports.update_page = async (req, res) => {
  if (req.body.page) {
    const new_page = await Page.findByIdAndUpdate(
      req.params.pageId,
      { page },
      { new: true }
    );
    return res.json(new_page);
  } else {
    return res.status(400).json({ error: "Page is required" });
  }
};

exports.delete_page = async (req, res) => {
  const page = await Page.findById(req.params.pageId);
  if (page) {
    await Page.findByIdAndDelete(req.params.pageId);
    //update store's pages
    const store_pages =
      req.store.pages.filter((pageId) => pageId) !== req.params.pageId;
    await Store.findByIdAndUpdate(req.store._id, { pages: store_pages });
    return res.json({ message: "Page deleted" });
  } else {
    return res.status(404).json({ error: "Page not found" });
  }
};
