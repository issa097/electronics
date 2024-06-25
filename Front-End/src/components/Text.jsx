import React from 'react'

function Text({ SubCategory, ProductForm, categoryForm, children }) {
    const issa = [SubCategory, ProductForm, categoryForm]
    console.log(issa)
    return (
        <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center">
                <span className="px-3 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                    {children}
                </span>
            </div>
        </div>
    )
}

export default Text
