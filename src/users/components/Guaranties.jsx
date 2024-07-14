import { FaShippingFast } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

function Guaranties() {
    return (
        <div className="flex justify-between text-center p-20">
        <div className="flex flex-col gap-2">
            <div className="bg-stone-400 p-2 rounded-full w-16 self-center">
                <div className="text-3xl p-2 bg-black rounded-full w-12 h-12 text-white flex justify-center"><FaShippingFast /></div>
            </div>
            <div>FREE AND FAST DELIVERY</div>
            <div>Free delivery for all orders</div>
        </div>
        <div className="flex flex-col gap-2">
            <div className="bg-stone-400 p-2 rounded-full w-16 self-center">
                <div className="text-3xl p-2 bg-black rounded-full w-12 h-12 text-white flex justify-center"><FaHeadset /></div>
            </div>
            <div>24/7 CUSTOMER SERVICE</div>
            <div>Friendly 24/7 customer support</div>
        </div>
        <div className="flex flex-col justify-center gap-2">
            <div className="bg-stone-400 p-2 rounded-full w-16 self-center">
                <div className="text-3xl p-2 bg-black rounded-full w-12 h-12 text-white flex justify-center"><IoShieldCheckmarkOutline /></div>
            </div>
            <div>MONEY BACK GUARANTEE</div>
            <div>We reurn money within 30 days</div>
        </div>
    </div>
    )
}

export default Guaranties
