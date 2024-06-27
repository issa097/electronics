import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ProductForm from './ProductForm'
import SubCategory from './SubCategory'
import Text from '../components/Text'
import { useCat, useSubCat } from '../usecontext/Usecontext';

function Category() {

    const { cat, setcatData } = useCat()
    const { subCat, setSubcatData } = useSubCat()
    console.log(cat)
    console.log(subCat)
    const [category, setcategory] = useState({
        category_name: ''
    })
    const getcategory = async () => {
        try {
            const response = await axios.get('http://localhost:4000/cat')
            const responses = await axios.get('http://localhost:4000/getsubcategory')
            const categoryInfo = await response.data.result
            console.log(categoryInfo)
            setcatData(categoryInfo)

            const subCategoryInfo = await responses.data.result

            setSubcatData(subCategoryInfo)
        } catch (error) {
            console.log(error)
        }

    }

    const fetchData = async () => {
        try {
            const response = await axios.post("http://localhost:4000/insertCategory", category)


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getcategory()
    }, [])


    return (
        <>
            <Text>categoryForm</Text>

            <form onSubmit={(e) => {
                e.preventDefault();
                fetchData();
            }} className='max-w-sm mx-auto'>
                <div>
                    <label htmlFor="category-name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Category Name
                    </label>
                    <input value={category.category_name} onChange={(e) => setcategory({ ...category, category_name: e.target.value })}
                        type="text" name="category-name" id="category-name" placeholder="Category Name"
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

            <Text ProductForm="ProductForm" >ProductForm</Text>

            <ProductForm />
            <Text SubCategory="SubCategory" >SubCategory</Text>
            <SubCategory />
        </>
    );

}

export default Category