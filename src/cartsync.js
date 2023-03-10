const { getBrandInfo } = require("../helpers/brand/getBrandInfo");
const { test } = require("../helpers/brand/test");

class CartSync {
  constructor(config) {
    this.id = config.id;
    this.api = {
      cartsync: config.cartsync,
      bigcommerce: config.bigcommerce,
      storeApiToken: config.storeApiToken,
      storeApiClientId: config.storeApiClientId,
    };
    this.brandInfo = "";
    this.test = test;
  }

  async getBrand(brandSlug) {
    const { info, products } = await getBrandInfo(this, brandSlug);
    this.brandInfo = {
      info: info,
      products: products,
    };
  }
}

module.exports = CartSync;
