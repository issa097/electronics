const Cart = require('../model/Cart')



const CartPost = async (req, res) => {
    try {
        const user_id = req.user
        const { product_id, quantity } = req.body
        console.log(product_id)
        const CartPostInfo = await Cart.CartPost(user_id, product_id, quantity)
        return res.status(200).json({ CartPostInfo: CartPostInfo.rows })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error })

    }

}
const CartGet = async (req, res) => {
    try {

        const CartGetInfo = await Cart.CartGet()
        return res.status(200).json({ CartGetInfo: CartGetInfo.rows })
    } catch (error) {
        return res.status(500).json({ error })

    }

}
const CartGetByUserId = async (req, res) => {
    try {
        const user_id = req.user

        const CartGetByUserIdInfo = await Cart.CartGetByUserId(user_id)
        return res.status(200).json({ CartGetByUserIdInfo: CartGetByUserIdInfo.rows })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ error })

    }

}
const CartGetByCartId = async (req, res) => {
    try {
        const cart_id = req.params

        const CartGetByCartIdInfo = await Cart.CartGetByCartId(cart_id)
        return res.status(200).json({ CartGetByCartIdInfo: CartGetByCartIdInfo.rows })
    } catch (error) {
        return res.status(500).json({ error })

    }

}
const CartGetByProductId = async (req, res) => {
    try {
        const product_id = req.params

        const CartGetByProductIdInfo = await Cart.CartGetByProductId(product_id)
        return res.status(200).json({ CartGetByProductIdInfo: CartGetByProductIdInfo.rows })
    } catch (error) {
        return res.status(500).json({ error })

    }

}


module.exports = {
    CartPost,
    CartGet,
    CartGetByUserId,
    CartGetByCartId,
    CartGetByProductId
}
