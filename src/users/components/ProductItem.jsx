import { HiOutlineHeart } from "react-icons/hi2";


function ProductItem() {
    return (
            <div className="w-60 h-auto">
                <div className="w-60 h-56 bg-stone-200 relative rounded">
                    {/* image */}
                    <div className="absolute left-2 top-2 bg-red-500 px-3 py-1 text-white rounded text-lg">-40%</div>
                    <div className="absolute right-2 top-2 bg-white p-2 rounded-3xl text-2xl"><HiOutlineHeart /></div>
                    {/* <div className="absolute flex justify-center w-full h-10 bg-black bottom-0 rounded-b text-white  p-2">Add to cart</div> */}
                </div>
                <div className="text-xl font-medium	mt-2">title</div>
                <div className="flex gap-3 ">
                    <div className="text-red-500 font-medium">$120</div>
                    <div className="text-stone-500 line-through">$160</div>
                </div>
            </div>
    )
}

export default ProductItem
