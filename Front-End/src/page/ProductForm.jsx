import axios from 'axios';
import React, { useState } from 'react';

function ProductForm() {
    const [productForm, setProductForm] = useState({
        product_name: '',
        description: '',
        price: '',
        img_url: '',
        category_name: '',
        subcategory_name: '',
    });

    async function productForms() {
        try {
            await axios.post("http://localhost:4000/insert", productForm);
            alert('Product added successfully!');
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                productForms();
            }}
            className="max-w-sm mx-auto"
        >
            <div className="mb-5">
                <label htmlFor="product_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Product Name
                </label>
                <input
                    value={productForm.product_name}
                    onChange={(e) => setProductForm({ ...productForm, product_name: e.target.value })}
                    type="text"
                    id="product_name"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter product name"
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Description
                </label>
                <input
                    value={productForm.description}
                    onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                    type="text"
                    id="description"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter description"
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="price" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Price
                </label>
                <input
                    value={productForm.price}
                    onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                    type="number"
                    id="price"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter price"
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="img_url" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Image URL
                </label>
                <input
                    value={productForm.img_url}
                    onChange={(e) => setProductForm({ ...productForm, img_url: e.target.value })}
                    type="text"
                    id="img_url"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Enter image URL"
                    required
                />
            </div>
            <div className="mb-5">
                <label htmlFor="category_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Category
                </label>
                <select
                    value={productForm.category_name}
                    onChange={(e) => setProductForm({ ...productForm, category_name: e.target.value })}
                    id="category_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="">Select category</option>
                    <option value="pc">PC</option>
                    <option value="phone">Phone</option>
                </select>
            </div>
            <div className="mb-5">
                <label htmlFor="subcategory_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
                    Subcategory
                </label>
                <select
                    value={productForm.subcategory_name}
                    onChange={(e) => setProductForm({ ...productForm, subcategory_name: e.target.value })}
                    id="subcategory_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                    <option value="">Select subcategory</option>
                    <option value="gaming">Gaming</option>
                    <option value="honor">Honor</option>
                </select>
            </div>
            <div className='flex items-center justify-center '>
                <button
                    type="submit"
                    className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    send            </button></div>
        </form>
    );
}

export default ProductForm;
