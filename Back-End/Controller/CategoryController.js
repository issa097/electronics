

const Category = require('../model/Category')



const getCategory = async (req, res) => {

    try {

        const result = await Category.getCategory()
        return res.status(200).json({ result: result.rows })
    } catch (error) {
        return res.status(500).json({ error: error })
        console.log(error)

    }
}

const insertCategory = async (req, res) => {

    try {
        const { category_name } = req.body
        const result = await Category.insertCategory(category_name)
        return res.status(200).json({ result: result.rows })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error })

    }
}
const insertSubCategory = async (req, res) => {

    try {
        const { subcategory_name } = req.body
        const result = await Category.insertSubCategory(subcategory_name)
        return res.status(200).json({ result: result.rows })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error: error })

    }
}

module.exports = {
    getCategory,
    insertCategory,
    insertSubCategory
}