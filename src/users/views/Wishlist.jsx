import { PRODUCTS } from "../../datas"
import WishlistItem from "../components/WishlistItem"

function Wishlist() {
    return (
        <div className="w-[80vw] mx-auto my-20">
            <div className="flex justify-between text-center">
                <div className="py-3">Wishlist ({PRODUCTS.length})</div>
                <button className="px-10 py-3 border-2 border-stone-400">Move All To Bag</button>
            </div>
            <div className="mt-10">
            <div className="p-5 flex flex-wrap gap-16">
                    {PRODUCTS.map(product => <WishlistItem key={product.id} data={product} />)}
                </div>
            </div>
        </div>
    )
}

export default Wishlist
