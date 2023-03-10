exports.getBrandInfo = async function (config, brandSlug) {
  const response = await fetch(
    `${config.api.cartsync}` + "/api/v2/Manufacturer/GetAll",
    {
      method: "GET",
    }
  );

  const data = await response.json();
  var dataReturn = {};
  Object.entries(data).forEach(([key, dataObject]) => {
    if (dataObject["Slug"] === brandSlug) {
      dataReturn.info = dataObject;
    }
  });

  const products = await fetch(
    `${config.api.bigcommerce}` + "/v3/catalog/products?brand_id=50",
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "X-Auth-Token": config.api.storeApiToken,
        "X-Auth-Client": config.api.storeApiClientId,
        "Access-Control-Allow-Origin": "*",
      },
    }
  );

  const productList = await products.json();
  dataReturn.products = productList.data;

  return dataReturn;
};
