import React from 'react';
import ProductList from "@/components/product-list";
import Container from "@/components/container";
import Loading from "@/app/products/loading";
import sepehrPic1 from "@/../public/img/products/ideogram.jpeg"
import sepehrPic2 from "@/../public/img/products/ideogram (1).jpeg"
import sepehrPic3 from "@/../public/img/products/ideogram (2).jpeg"
import sepehrPic4 from "@/../public/img/products/ideogram (3).jpeg"
import sepehrPic5 from "@/../public/img/products/ideogram (4).jpeg"
import sepehrPic6 from "@/../public/img/products/ideogram (5).jpeg"
import sepehrPic7 from "@/../public/img/products/ideogram (6).jpeg"
import sepehrPic8 from "@/../public/img/products/ideogram (7).jpeg"
import sepehrPic9 from "@/../public/img/products/ideogram (8).jpeg"

const products = [
    {
        id: "1",
        category: "Sepehr Logo",
        name: "Logo 1",
        price: "$3,999.00",
        images: sepehrPic1,
    },
    {
        id: "2",
        category: "Sepehr Logo",
        name: "Logo 2",
        price: "$3,499.00",
        images: sepehrPic2,
    },
    {
        id: "3",
        category: "Sepehr Logo",
        name: "Logo 3",
        price: "$1,599.00",
        images: sepehrPic3,
    },
    {
        id: "4",
        category: "Sepehr Logo",
        name: "Logo 4",
        price: "$2,399.00",
        images: sepehrPic4,
    },
    {
        id: "5",
        category: "Sepehr Logo",
        name: "Logo 5",
        price: "$2,499.00",
        images: sepehrPic5,
    },
    {
        id: "6",
        category: "Sepehr Logo",
        name: "Logo 6",
        price: "$3,899.00",
        images: sepehrPic6,
    },
    {
        id: "7",
        category: "Sepehr Logo",
        name: "Logo 7",
        price: "$1,799.00",
        images: sepehrPic7,
    },
    {
        id: "8",
        category: "Sepehr Logo",
        name: "Logo 8",
        price: "$699.00",
        images: sepehrPic8,
    },
];
const Products = () => {
    return (
        // <Loading />
        <Container>
            <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                <ProductList items={products} />
            </div>
        </Container>
    );
};

export default Products;