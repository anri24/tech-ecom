import { HiOutlineHeart } from "react-icons/hi2";


function ProductItem({data}) {
    return (
            <div className="w-60 h-auto">
                <div className="w-60 h-56 bg-stone-200 relative rounded">
                    <img src={data.images[0]} alt={data.name} className="w-full h-full" />
                    {data.discount ? <div className="absolute left-2 top-2 bg-red-500 px-3 py-1 text-white rounded text-lg">-{data.discount}%</div> : ""}
                    <div className="absolute right-2 top-2 bg-white p-2 rounded-3xl text-2xl"><HiOutlineHeart /></div>
                    {/* <div className="absolute flex justify-center w-full h-10 bg-black bottom-0 rounded-b text-white  p-2">Add to cart</div> */}
                </div>
                <div className="text-xl font-medium	mt-2">{data.name}</div>
                <div className="flex gap-3 ">
                    <div className="text-red-500 font-medium">{data.currency}{Number(data.price - (data.price * (data.discount / 100))).toFixed(2)}</div>
                    {data.discount ? <div className="text-stone-500 line-through">{data.currency}{Number(data.price).toFixed(2)}</div> : null}
                </div>
            </div>
    )
}

export default ProductItem
