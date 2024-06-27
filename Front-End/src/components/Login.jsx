import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useUser } from '../usecontext/Usecontext';
import Modal from 'react-modal';
import '../components/model.css'

Modal.setAppElement('#root'); // لتفادي مشاكل الوصول

function Login({ onRequestClose, isOpen }) {
    const { users } = useUser();
    console.log("users", users);

    const [user, setuser] = useState({
        email: '',
        password: ''
    });


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:4000/login', user);
            const UserLogin = response.data.userss
            const Token = response.data.Token
            if (UserLogin) {
                localStorage.setItem("Token", Token)
                onRequestClose();
            }
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <Modal
            className="login_custom-modal"
            overlayClassName="section"
            contentLabel="Login" isOpen={isOpen} >


            <section className="bg-gray-50 pt-6 pb-6 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto  lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create an account
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                <div>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                    <input value={user.email} onChange={(e) => {
                                        setuser({ ...user, email: e.target.value });
                                    }} type="email" name="email" id="email" placeholder="name@company.com" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <div>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                    <input value={user.password} onChange={(e) => {
                                        setuser({ ...user, password: e.target.value });
                                    }} type="password" name="password" id="password" placeholder="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                </div>
                                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                    Create an account
                                </button>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    Don't have an account? <a href="./register" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Register here</a>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </Modal >
    );
}

export default Login;
