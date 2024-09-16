
const productModel = require("../models/product-model")


///api/v1/product
exports.getProduct = async(req, res, next) => {

  const productData = await productModel.find({})

  res.json({
    success: true,
    productData
  });
};

exports.getProductId = async(req, res, next) => {

  try{
    const productGetById =  await productModel.findById(req.params.id)
    res.json({
      success: true,
      productGetById
    });

  }catch(erorr){
    res.json({
      success: false,
      message : erorr.message
    });
  }

};
