import React, { useEffect, useState } from 'react'
import axios from "axios";

function Register() {

    const [user, setuser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        photo: {
            "newphoto1": "http://example.com/newphoto1.jpg",
            "newphoto2": "http://example.com/newphoto2.jpg"
        },
        age: '',
        password: '',

    })
    const fetchData = async (e) => {
        try {
            const Response = await axios.post('http://localhost:4000/register', user)
            console.log(Response)

        } catch (error) {
            console.log(error)

        }

    }
    useEffect(() => {
        fetchData()
    }, [])




    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an account
                        </h1>
                        <form onSubmit={(e) => {
                            e.preventDefault()
                            fetchData()
                        }}

                            className="space-y-4 md:space-y-6" action="#">
                            <div>
                                <label for="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">first_name</label>
                                <input value={user.first_name} onChange={(e) => {
                                    setuser({ ...user, first_name: e.target.value })
                                }}
                                    type="text" name="first_name" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="firstName" required="" />
                            </div>
                            <div>
                                <label for="last_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">last_name</label>
                                <input value={user.last_name} onChange={(e) => {
                                    setuser({ ...user, last_name: e.target.value })
                                }} type="last_name" name="last_name" id="last_name" placeholder="last_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>
                                <input value={user.email} onChange={(e) => {
                                    setuser({ ...user, email: e.target.value })
                                }} type="email" name="email" id="email" placeholder="name@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label for="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">age</label>
                                <input value={user.age} onChange={(e) => {
                                    setuser({ ...user, age: e.target.value })
                                }} type="age" name="age" id="age" placeholder="age" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">password</label>
                                <input value={user.password} onChange={(e) => {
                                    setuser({ ...user, password: e.target.value })
                                }} type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                            </div>
                            {/* <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <div className="ml-3 text-sm">
                                    <label for="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div> */}


                            <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="./Login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>)
}

export default Register