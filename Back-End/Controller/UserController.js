const user = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const key = "issa"




const Register = async (req, res) => {
    try {
        const { first_name, last_name, email, photo, age, password } = req.body
        console.log(req.body)

        const existUser = await user.GetEmail(email)
        if (existUser.rows.length > 0) {
            return res.status(400).json('user exist')
        } else {
            hasedPas = await bcrypt.hash(password, 10)
            const newUser = await user.Register(first_name, last_name, email, photo, parseInt(age), hasedPas)
            return res.status(200).json(newUser.rows)
        }
    } catch (error) {
        console.log(error)

    }

}

const Login = async (req, res) => {
    const { email, password } = req.body
    try {
        const result = await user.GetEmail(email)
        if (result.rows.length > 0) {
            const userss = result.rows[0]

            passwordComper = await bcrypt.compare(password, userss.password)
            if (passwordComper) {
                const Token = jwt.sign(
                    { user_id: userss.user_id, first_name: userss.first_name, last_name: userss.last_name, email: userss.email }, key
                )
                await user.Active(userss.user_id);

                res.cookie('Token', Token, { httpOnly: true });

                return res.status(200).json({
                    userss, Token

                })
            } else {
                return res.status(400).json({ message: "Incorrect password" })
            }

        } else {
            return res.status(400).json({ message: "User not found" })

        }
    } catch (error) {
        console.log(error)

    }

}


const getUser = async (req, res) => {
    const user_id = req.user
    try {
        const getuser = await user.getUser(user_id)
        return res.status(200).json(getuser.rows)
    } catch (error) {
        return res.status(400).json(error)
    }


}
const getUsers = async (req, res) => {
    try {
        const getAlluser = await user.getUsers()
        return res.status(200).json({ getAlluser: getAlluser.rows })
    } catch (error) {
        return res.status(400).json(error)
    }


}
const deleteUsers = async (req, res) => {
    const user_id = req.params.user_id
    try {
        const getuserid = await user.getUser(user_id)

        if (!getuserid.rows.length) {
            return res.status(404).json({ message: "User not found" });

        } else {
            const DeleteUser = await user.deleteUsers(user_id)
            return res.status(200).json({ message: "User found", DeleteUser: DeleteUser.rows });
        }




    } catch (error) {
        return res.status(400).json("User Is Un Deleted")
    }


}





module.exports = {
    Register,
    Login,
    getUser,
    getUsers,
    deleteUsers
}


