const db = require('../DataBase/db')


function getCategory() {
    const queryText = "select * from category"
    return db.query(queryText)

}
function insertCategory(category_name) {
    const queryText = "insert into category (category_name) values ($1) RETURNING*"
    const value = [category_name]
    return db.query(queryText, value)

}
function insertSubCategory(category_name) {
    const queryText = "insert into subcategory (subcategory_name) values ($1) RETURNING*"
    const value = [category_name]
    return db.query(queryText, value)

}


module.exports = {
    getCategory,
    insertCategory,
    insertSubCategory
}