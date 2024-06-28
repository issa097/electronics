
import Card from '../components/Card';
import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

function Product() {

    const [product, setProduct] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    console.log(filteredProducts)
    const [filteredSubProduct, setFilteredSubProduct] = useState([]);
    console.log(filteredSubProduct)

    const [filterProductName, setfilterProductName] = useState([]);
    console.log(filterProductName)




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



    const filterProduct = (category_name) => {
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
        if (product_name === 'product_name') {
            setfilterProductName(filteredSubProduct)
        } else {
            const filteredNmae = filteredSubProduct.filter((item) => item.product_name.toLowerCase().trim() === product_name.toLowerCase().trim());
            setfilterProductName(filteredNmae);
        }
    };


    return (
        <Card filterProductName={filterProductName} product={product} filterProduct={filterProduct} filterSubProducts={filterSubProducts} filterProductNames={filterProductNames} />
    );
}

export default Product;
