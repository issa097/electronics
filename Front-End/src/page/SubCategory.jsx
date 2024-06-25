import axios from 'axios';
import React, { useState } from 'react';

function SubCategory() {
    const [SubCategory, setSubCategory] = useState({
        subcategory_name: ''
    })
    async function SubCategoryForms() {
        try {
            const response = await axios.post("http://localhost:4000/insertSubCategory", SubCategory);

        } catch (error) {
            console.error('Error adding product:', error);
        }
    }

    return (
        <>


            <form onSubmit={(e) => {
                e.preventDefault();
                SubCategoryForms();
            }} className='max-w-sm mx-auto'>
                <div>
                    <label htmlFor="SubCategory" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Category Name
                    </label>
                    <input value={SubCategory.subcategory_name} onChange={(e) => setSubCategory({ ...SubCategory, subcategory_name: e.target.value })}
                        type="text" name="SubCategory" id="SubCategory" placeholder="Sub Category"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>

                <div className='flex items-center justify-center p-5'>
                    <button
                        type="submit"
                        className="text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        send            </button>
                </div>

            </form>



        </>
    );
}

export default SubCategory;
