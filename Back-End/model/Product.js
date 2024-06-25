const db = require('../DataBase/db')



async function InsertProduct(product_name, description, price, img_url, category_name, subcategory_name) {
    try {
        const queryText1 = "SELECT category_id FROM category WHERE category_name = $1";
        const value1 = [category_name];
        const categoryResult = await db.query(queryText1, value1);
        const category_id = categoryResult.rows[0].category_id;

        // Query to get the subcategory_id
        const queryText2 = "SELECT subcategory_id FROM subcategory WHERE subcategory_name = $1";
        const value2 = [subcategory_name];
        const subcategoryResult = await db.query(queryText2, value2);
        const subcategory_id = subcategoryResult.rows[0].subcategory_id;

        const queryText3 = "INSERT INTO product (product_name, description, price,img_url, category_id, subcategory_id) VALUES ($1, $2, $3, $4, $5,$6) RETURNING *";
        const value3 = [product_name, description, price, img_url, category_id, subcategory_id];

        return db.query(queryText3, value3);

        // return productResult.rows

    } catch (error) {
        console.error('Error inserting product:', error);
        throw error;
    }

}

function getProduct(category_id, sub_category) {
    const queryText = "select * from product where category_id=$1 AND  sub_category = $2"
    const value = [category_id, sub_category]
    console.log(sub_category)
    return db.query(queryText, value)

}
function getProducts() {
    const queryText = "select * from product where is_deleted = false"
    return db.query(queryText)

}








module.exports = {
    InsertProduct,
    getProduct,
    getProducts
}