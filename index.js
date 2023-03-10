const CartSync = require("./src/cartsync");

// const cartsync = new CartSync({
//   cartsync: "https://revivalanimal-ih2.cartsync.com",
//   bigcommerce: "https://api.bigcommerce.com/stores/3xvwarb9yi",
//   storeApiToken: "hp1e35bm8d3lkjx11d2mkj5tpviix9x",
//   storeApiClientId: "66u93cfded0c6ilqbsy0ebti1cmwroi",
// });

// cartsync.getBrand("zoetis").then(() => {
//   console.log(cartsync);
// });

module.exports = {
  CartSync: CartSync,
};
