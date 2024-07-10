import { Link } from "react-router-dom"

function HeaderTop() {
    return (
        <div className="bg-black text-white ">
            <div className="flex justify-around text-center w-[80vw] m-auto p-2">
                <div className="w-auto m-auto flex gap-5">
                    <div>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</div>
                    <Link to='#' className="underline">ShopNow</Link>
                </div>
            <div className="w-auto">English</div>
            </div>
        </div>
    )
}

export default HeaderTop
