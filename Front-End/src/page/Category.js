import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Category() {
    const [category, setcategory] = useState({
        name: ''
    })


    const fetchData = async () => {
        try {
            const response = await axios.post("http://localhost:4000/insertCategory", category)


        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
    })


    return (

        <form onSubmit={(e) => {
            e.preventDefault()
            fetchData()

        }}>

            <div>
                <label for="text" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">category name</label>
                <input value={category.name} onChange={(e) => setcategory({ ...category, name: e.target.value })}
                    type="text" name="category name" id="category name" placeholder="category name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
            </div>
            <button type="submit" className="w-full text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">send</button>


        </form >

    )
}

export default Category