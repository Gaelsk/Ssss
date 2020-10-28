const get_default_page = (shop) => {
  return {
    name: "home",
    shop: shop._id,
    components: [
      {
        name: "hero",
        data: {
          title: shop.name,
          description: shop.about,
        },
        style: {
          color: "#fff",
          overlay: true,
          backgroundImage: "default_img.jpg",
        },
      },
      {
        name: "products",
        style: {
          backgroundColor: "#fff",
          columns: 3,
        },
      },
    ],
  };
};

module.exports = get_default_page;
