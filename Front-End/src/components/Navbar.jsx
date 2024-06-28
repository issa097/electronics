

// const Nav = () => {



//     const toggleMenu = () => {
//         setIsMenuOpen(!isMenuOpen);
//     };

//     return (
//         <div>
//             <header>
//                 {/* lg+ */}
//                 <div className="bg-[#1f2937]">
//                     <div className="px-4 mx-auto sm:px-6 lg:px-8">
//                         <nav className="relative flex items-center justify-between h-16 lg:h-24">
//                             <div className="hidden lg:flex lg:items-center lg:space-x-10">
//                                 <Link to="/" title="" className="text-base font-medium text-white">
//                                     {" "}
//                                     {/* Home{" "} */}
//                                     {users.first_name}
//                                 </Link>

//                                 <Link
//                                     to="/AllProducts"
//                                     title=""
//                                     className="text-base font-medium text-white"
//                                 >
//                                     {" "}
//                                     Products
//                                 </Link>

//                                 <Link to="/Aboutus" title="" className="text-base font-medium text-white">
//                                     {" "}
//                                     About Us
//                                 </Link>

//                                 <Link to="/Contactus" title="" className="text-base font-medium text-white">
//                                     {" "}
//                                     Contact Us
//                                 </Link>
//                             </div>

//                             <div className="lg:absolute lg:-translate-x-1/2 lg:inset-y-5 lg:left-1/2">
//                                 <div className="flex flex-col justify-center items-center text-white">
//                                     <Link to="/" title="" className="flex">
//                                         <img className="w-auto h-8 lg:h-10" src="" alt="" />
//                                     </Link>
//                                     <div></div>
//                                 </div>
//                             </div>

//                             <button
//                                 type="button"
//                                 className="flex items-center justify-center ml-auto text-white w-9 h-9 lg:hidden"
//                             >
//                                 <svg
//                                     className="w-5 h-5"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                                     />
//                                 </svg>
//                             </button>

//                             <button
//                                 type="button"
//                                 onClick={toggleMenu}
//                                 className="inline-flex p-2 ml-5 text-black transition-all duration-200 rounded-md lg:hidden focus:bg-gray-100 hover:bg-gray-100"
//                             >
//                                 <svg
//                                     className="w-6 h-6"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M4 6h16M4 12h16m-7 6h7"
//                                     />
//                                 </svg>
//                             </button>

//                             <div className="flex space-x-10">
//                                 {check() ? (
//                                     <div className="hidden lg:flex justify-end lg:items-center lg:space-x-10">
//                                         <Link
//                                             to="/side"
//                                             title=""
//                                             className="flex items-center justify-center w-10 h-10 text-white"
//                                         >
//                                             <svg
//                                                 xmlns="http://www.w3.org/2000/svg"
//                                                 fill="none"
//                                                 viewBox="0 0 24 24"
//                                                 strokeWidth="1.5"
//                                                 stroke="currentColor"
//                                                 className="w-6 h-6"
//                                             >
//                                                 <path
//                                                     strokeLinecap="round"
//                                                     strokeLinejoin="round"
//                                                     d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
//                                                 />
//                                             </svg>{" "}
//                                         </Link>{" "}
//                                     </div>
//                                 ) : (
//                                     // Authenticated User Buttons
//                                     <div className="hidden lg:flex lg:items-center lg:space-x-10">
//                                         <Link
//                                             to="/register"
//                                             title=""
//                                             className="text-base font-medium text-white"
//                                         >
//                                             {" "}
//                                             Sign up
//                                         </Link>

//                                         <Link
//                                             to="/login"
//                                             title=""
//                                             className="text-base font-medium text-white"
//                                         >
//                                             {" "}
//                                             Sign in
//                                         </Link>
//                                     </div>
//                                 )}
//                                 <div className="hidden lg:flex lg:items-center lg:space-x-10">
//                                     <Link
//                                         to="/Cart"
//                                         title=""
//                                         className="flex items-center justify-center w-10 h-10 text-white"
//                                     >
//                                         <svg
//                                             className="w-6 h-6"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                             fill="none"
//                                             viewBox="0 0 24 24"
//                                             stroke="currentColor"
//                                         >
//                                             <path
//                                                 strokeLinecap="round"
//                                                 strokeLinejoin="round"
//                                                 strokeWidth="2"
//                                                 d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                                             />
//                                         </svg>
//                                     </Link>{" "}
//                                 </div>{" "}
//                             </div>
//                         </nav>
//                     </div>
//                 </div>

//                 {/* xs to lg */}
//                 <nav
//                     className={`py-4 bg-transparent lg:hidden ${isMenuOpen ? "block" : "hidden"
//                         }`}
//                 >
//                     <div className="px-4 mx-auto sm:px-6 lg:px-8">
//                         <div className="flex items-center justify-between">
//                             <p className="text-sm font-semibold tracking-widest text-gray-400 uppercase">
//                                 Menu
//                             </p>

//                             <button
//                                 type="button"
//                                 className="inline-flex p-2 text-white transition-all duration-200 rounded-md focus:bg-gray-100 hover:bg-gray-100"
//                                 onClick={toggleMenu}
//                             >
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className="w-6 h-6"
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path
//                                         strokeLinecap="round"
//                                         strokeLinejoin="round"
//                                         strokeWidth="2"
//                                         d="M6 18L18 6M6 6l12 12"
//                                     />
//                                 </svg>
//                             </button>
//                         </div>

//                         <div className={`mt-6 ${isMenuOpen ? "block" : "hidden"}`}>
//                             <div className="flex flex-col space-y-2">
//                                 <a
//                                     href="#"
//                                     title=""
//                                     className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
//                                 >
//                                     {" "}
//                                     Features
//                                 </a>

//                                 <a
//                                     href="#"
//                                     title=""
//                                     className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
//                                 >
//                                     {" "}
//                                     Solutions
//                                 </a>

//                                 <a
//                                     href="#"
//                                     title=""
//                                     className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
//                                 >
//                                     {" "}
//                                     Resources
//                                 </a>

//                                 <a
//                                     href="#"
//                                     title=""
//                                     className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
//                                 >
//                                     {" "}
//                                     Pricing
//                                 </a>
//                             </div>

//                             <hr className="my-4 border-gray-200" />

//                             <div className="flex flex-col space-y-2">
//                                 <a
//                                     href="#"
//                                     title=""
//                                     className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
//                                 >
//                                     {" "}
//                                     Sign up
//                                 </a>

//                                 <a
//                                     href="#"
//                                     title=""
//                                     className="py-2 text-base font-medium text-black transition-all duration-200 focus:text-blue-600"
//                                 >
//                                     {" "}
//                                     Sign in
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </nav>
//             </header>
//         </div>
//     );
// };

// export default Nav;




import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useUser } from '../usecontext/Usecontext'
import axios from "axios";
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Dashboard', href: '/category', current: true },
    { name: 'product', href: '/product', current: false },
    { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Nav({ isLoginOpen, setIsLoginOpen, setIsRegisterOpen, isRegisterOpen }) {

    const { users, setuserData } = useUser()



    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.defaults.headers.common["Authorization"] = `${check()}`
                const Response = await axios.get('http://localhost:4000/getUser')
                const Userinfo = Response.data[0]
                setuserData(Userinfo)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
        check()

    }, [])

    function check() {
        return localStorage.getItem('Token')
    }



    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <img
                                        className="h-8 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                                        alt="Your Company"
                                    />
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium',
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <Link to='/cart'
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                                </Link>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            {check() ? (
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src={users.photo?.photo1 || "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}
                                                    alt=""
                                                />
                                            ) : (
                                                <img
                                                    className="h-8 w-8 rounded-full"
                                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                                    alt=""
                                                />
                                            )}
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={React.Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link onClick={() => setIsLoginOpen(true)} to="/login"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Login
                                                    </Link>

                                                )}

                                            </Menu.Item>
                                            <Menu.Item>

                                                {({ active }) => (
                                                    <Link onClick={() => setIsRegisterOpen(true)} to="/register"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        register
                                                    </Link>
                                                )}

                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium',
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}


