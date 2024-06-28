const db = require('../DataBase/db')



function CartPost(user_id, product_id, quantity) {
    const queryText = "insert into cart (user_id,product_id,quantity) values ($1,$2,$3)RETURNING*"
    const value = [user_id, product_id, quantity]
    return db.query(queryText, value)
}
function CartGet() {
    const queryText = "select * from  cart "
    return db.query(queryText)
}
function CartGetByUserId(user_id) {
    const queryText = `
    SELECT 
        cart.cart_id,
        product.product_name,
        product.price,
        product.img_url,
        product.description,
        users.first_name,
        users.last_name,
        users.email,
        users.photo
    FROM 
        cart
    JOIN 
        product ON cart.product_id = product.product_id
    JOIN 
        users ON cart.user_id = users.user_id
    WHERE 
        cart.user_id = $1;
`;

    value = [user_id]
    return db.query(queryText, value)
}
function CartGetByCartId(Cart_id) {
    const queryText = "select * from  cart where Cart_id=$1"
    value = [Cart_id]
    return db.query(queryText, value)
}
function CartGetByProductId(product_id) {
    const queryText = "select * from  cart where product_id=$1"
    value = [product_id]
    return db.query(queryText, value)
}


module.exports = {
    CartPost,
    CartGet,
    CartGetByUserId,
    CartGetByCartId,
    CartGetByProductId

}