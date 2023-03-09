const { getBrandInfo } = require("../helpers/brand/getBrandInfo");

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
  }

  async getBrand(brandSlug) {
    this.brandInfo = await getBrandInfo(this, brandSlug);
  }
}

module.exports = CartSync;
