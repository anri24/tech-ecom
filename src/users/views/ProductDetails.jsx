import { useParams } from "react-router-dom"
import axiosClient from "../../axios-client"
import { useEffect, useState } from "react"

function ProductDetails() {
    const [product, setProduct] = useState({})
    const productId = useParams()
    useEffect(() => {
        axiosClient.get(`product/${productId.id}`).then(({data}) => setProduct(data.data))
    }, [])

    return (
        <div className="flex justify-center gap-2">
            <div className="w-[50%]  flex justify-center gap-2">
                <div className="w-[20%]">images</div>
                <div className="border border-black w-[50%]">image</div>
            </div>
            <div className="w-[30%]">
                <div className="p-2 border-b-2 border-stone-400">
                <div className="font-bold text-xl">{product.name}</div>
                {/* <div>{product.in_stock}</div> */}
                <div className="text-lg font-medium">${product.price}</div>
                <div className="">{product.description}</div>
                </div>
                <div className="p-2">
                    <div>dsa</div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
