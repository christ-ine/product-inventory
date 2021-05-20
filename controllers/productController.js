import asyncHandler from 'express-async-handler'
import Product from '../models/productModel.js'

//@desc Fetch all products
//@route GET /api/products
const getProducts = asyncHandler(async (req, res) => {

    const products = await Product.find({user: req.user._id})
    res.json(products)
})

//@desc delete a product
//@route DELETE /api/products/:id
const deleteProduct = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id)

    if (product) {
        await product.remove()
        res.json({ message: 'Product removed' })
    } else {
        res.status(404)
        throw new Error('Product not found')
    }
})

//@desc Create a product
//@route POST /api/products
const createProduct = asyncHandler(async (req, res) => {
    const { name, price, brand, size, description} = req.body

    const productExists = await Product.findOne({ name: name, size: size })

    if(productExists){
        res.status(400)
        throw new Error('product already exists')
    }

    const product = await Product.create({
        name,
        price, 
        user: req.user._id,
        brand,
        size,
        description
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

//@desc update a product
//@route PUT /api/products/:id
const updateProduct = asyncHandler(async (req, res) => {
    const { name, price, description, brand, size } = req.body
    const product = await Product.findById(req.params.id)

    if (product) {
        product.name = name
        product.price = price
        product.description = description
        product.brand = brand
        product.size = size

        const updatedProduct = await product.save()
        res.json(updatedProduct)
    } else {
        res.status(404)
        throw new Error('Product not found')
    }


})

export {
    getProducts,
    getProductById,
    deleteProduct,
    createProduct,
    updateProduct,
}