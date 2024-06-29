const db = require('../DataBase/db')

function GetEmail(email) {
    const queryText = 'select * from users WHERE email = $1'
    const value = [email]
    return db.query(queryText, value)
}


function Register(first_name, last_name, email, photo, age, password) {
    const queryText = "insert into  users ( first_name , last_name , email ,photo ,age,password) VALUES ($1,$2,$3,$4,$5,$6)RETURNING *"
    const value = [first_name, last_name, email, photo, age, password]
    return db.query(queryText, value)
}

function Login(email, password) {
    const queryText = "update users (email,password) VALUES ($1,$2) WHERE user_id = $1"

    value = [email, password]

    return db.query(queryText, value)
}
function Active(user_id) {
    const queryText = `UPDATE users
    SET status = true
    WHERE user_id = $1
 RETURNING * `;
    value = [user_id]

    db.query(queryText, value)
}

function getUser(user_id) {
    const queryText = 'select * from users where user_id =$1'
    value = [user_id]
    return db.query(queryText, value)
}
function getUsers() {
    const queryText = 'select * from users where is_deleted = false and status = false or true'

    return db.query(queryText)
}
function deleteUsers(user_id) {
    const queryText = 'UPDATE users SET  is_deleted = true WHERE user_id = $1 RETURNING *'
    const value = [user_id]
    return db.query(queryText, value)
}









module.exports = {
    Register,
    GetEmail,
    Login,
    getUser,
    getUsers,
    deleteUsers,
    Active
}