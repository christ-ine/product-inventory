import express from 'express'
const router = express.Router()
import {
    getProducts, 
    deleteProduct,
    createProduct,
    updateProduct
} from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router
    .route('/')
    .get(protect, admin, getProducts)
    .post(protect, admin, createProduct)

router
    .route('/:id')
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct)


export default router