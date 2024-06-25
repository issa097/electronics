const Products = require('../model/Product')


const insertProduct = async (req, res) => {

    try {
        const { product_name, description, price, img_url, category_name, subcategory_name } = req.body
        const result = await Products.InsertProduct(product_name, description, price, img_url, category_name, subcategory_name)
        return res.status(200).json({ result: result.rows })
    } catch (error) {
        return res.status(500).json({ error: error })

    }
}
const getProduct = async (req, res) => {

    try {
        const category_id = req.params.category_id

        const sub_category = req.params.sub_category
        const result = await Products.getProduct(category_id, sub_category)
        return res.status(200).json({ result: result.rows })
    } catch (error) {
        return res.status(500).json({ error: error })
        console.log(error)

    }
}
const getProducts = async (req, res) => {

    try {
        const result = await Products.getProducts()
        return res.status(200).json({ result: result.rows })
    } catch (error) {

        return res.status(500).json({ error: error })

    }
}
const getCategory = async (req, res) => {

    try {

        const result = await Products.getCategory()
        return res.status(200).json({ result: result.rows })
    } catch (error) {
        return res.status(500).json({ error: error })
        console.log(error)

    }
}

module.exports = {
    insertProduct,
    getProduct,
    getCategory,
    getProducts
}