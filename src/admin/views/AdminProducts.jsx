import { useEffect, useState } from "react";
import axiosClient from "../../axios-client";

function AdminProducts() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axiosClient.get('product/all').then(({data}) => setProducts(data.data))
    }, [])


    return (
        <div className="w-[70%] ml-[15%] mt-10 flex flex-col gap-2 pb-10">
            <div className="flex justify-around gap-5 bg-stone-400 text-center">
                <div className="w-10 text-nowrap">image</div>
                <div className="w-10 text-nowrap">name</div>
                <div className="w-10 text-nowrap">price</div>
                <div className="w-10 text-nowrap">in stock</div>
                <div className="w-10 text-nowrap">discount</div>
                <div className="w-10 text-nowrap"></div>
            </div>
            {products.map(product => (
                <div key={product.id} className="flex justify-around gap-5 text-center">
                    <div className="w-10 text-nowrap">{product.image}</div>
                    <div className="w-10 text-nowrap">{product.name}</div>
                    <div className="w-10 text-nowrap">${product.price}</div>
                    <div className="w-10 text-nowrap">{product.in_stock ? 'yes' : 'no'}</div>
                    <div className="w-10 text-nowrap">{product.discount}%</div>
                    <div className="w-10 text-nowrap"></div>
                </div>
            ))}
        </div>
    )
}

export default AdminProducts
