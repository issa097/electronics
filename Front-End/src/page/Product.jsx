import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Swal from 'sweetalert2';

function Product() {
    const [product, setProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filteredSubProduct, setFilteredSubProduct] = useState([]);
    const [filterProductName, setfilterProductName] = useState([]);

    const products = async () => {
        const response = await axios.get("http://localhost:4000/getProducts");
        const productInfo = response.data.result;
        setProduct(productInfo);
        setFilteredProducts(productInfo);
        setFilteredSubProduct(productInfo);
        setfilterProductName(productInfo)
    };

    useEffect(() => {
        products();

    }, []);

    const showAlert = (product_name) => {
        Swal.fire({
            title: 'Product Not Found',
            text: `You selected: ${product_name}`,
            icon: 'error',
            confirmButtonText: 'OK'
        });
    };

    const filterProduct = (category_name) => {
        console.log(category_name);
        if (category_name === "All Categories") {
            setFilteredProducts(product);
            setFilteredSubProduct(product);
            setfilterProductName(product)
        } else {
            const filtered = product.filter((item) => item.category_name.toLowerCase().trim() === category_name.toLowerCase().trim());
            setFilteredProducts(filtered);
            setFilteredSubProduct(filtered);
            setfilterProductName(filtered)
        }
    };

    const filterSubProducts = (subcategory_name) => {
        console.log(subcategory_name);
        if (subcategory_name === "Sub Categories") {
            setFilteredSubProduct(filteredProducts);
            setfilterProductName(filteredProducts)


        } else {
            const filteredSub = filteredProducts.filter((item) => item.subcategory_name.toLowerCase().trim() === subcategory_name.toLowerCase().trim());

            setFilteredSubProduct(filteredSub);
            setfilterProductName(filteredSub)

        }
    };
    const filterProductNames = (product_name) => {
        console.log(product_name);
        if (product_name === '') {
            showAlert(product_name)
            setfilterProductName(filteredSubProduct)
        } else {
            const filteredNmae = filteredSubProduct.filter((item) => item.product_name.toLowerCase().trim() === product_name.toLowerCase().trim());
            setfilterProductName(filteredNmae);
        }
    };

    return (
        <>
            <Search product={product} filterProduct={filterProduct} filterSubProducts={filterSubProducts} filterProductNames={filterProductNames} />

            <div className="flex  justify-center flex-wrap">
                {filterProductName.map((product, index) => (
                    <div key={index} className=" max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
                        <a href="#" className=''>
                            <img className="rounded-t-lg bg-white w-full h-52 " src={product.img_url} alt={product.product_name} />
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{product.product_name}</h5>
                            </a>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.description}</p>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Product;
