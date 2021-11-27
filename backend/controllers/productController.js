import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

// @desc              FETCH ALL PRODUCTS
//@route              GET /api/products
//@access             Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @desc              FETCH SINGLE PRODUCT
//@route              GET /api/products/:id
//@access             Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

// @desc              DELETE A PRODUCT
//@route              DELETE /api/products/:id
//@access             Private/Admin
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    await product.remove();
    res.json({ message: "Product removed" });
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

// @desc              CREATE A PRODUCT
//@route              POST /api/products
//@access             Private/Admin
const createProduct = asyncHandler(async (req, res) => {
  const product = new Product({
    name: "Sample Name",
    price: 0,
    user: req.user._id,
    image: "/images/sample.jpg",
    carats: 0,
    seller: "ABC",
    countInStock: 0,
    numReviews: 0,
    description: "Sample Description",
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// @desc              UPDATE A PRODUCT
//@route              PUT /api/products/:id
//@access             Private/Admin
const updateProduct = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    carats,
    seller,
    description,
    image,
    countInStock,
    numReviews,
  } = req.body;

  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.carats = carats;
    product.seller = seller;
    product.description = description;
    product.image = image;
    product.countInStock = countInStock;
    product.numReviews = numReviews;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not Found");
  }
});

export {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
};
