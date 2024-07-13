import CategoryList from "../components/CategoryList"
import SectionSmallTitle from "../components/SectionSmallTitle";
import SectionTitle from "../components/SectionTitle";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import CategoriesCarousel from "../components/CategoriesCarousel";
import { PRODUCTS } from "../../datas";
import { FaShippingFast } from "react-icons/fa";
import { FaHeadset } from "react-icons/fa";
import { IoShieldCheckmarkOutline } from "react-icons/io5";




function Dashboard() {
    return (
        <div className="w-[80vw] m-auto">
            <div className="flex">
                <CategoryList />
                <div className="p-10 w-full border-l-2 border-stone-200">
                    <div className="bg-black w-full h-96"></div>
                </div>
            </div>

            <div className="mt-20 p-10 border-b-2 border-stone-200">
                <SectionSmallTitle>Today's</SectionSmallTitle>
                <SectionTitle timer={1} carusel={true}>Flash Sales</SectionTitle>
                <div className="p-5 flex gap-16">
                    {PRODUCTS.map(product => <ProductItem key={product.id} data={product} />)}
                </div>
                <Link className="mt-5 flex justify-center p-10">
                    <div className="bg-red-500 px-10 py-3 text-white rounded capitalize">View All Product</div>
                </Link>
            </div>

            <CategoriesCarousel />

            <div className="mt-20 p-10 border-b-2 border-stone-200">
                <SectionSmallTitle>Our Products</SectionSmallTitle>
                <SectionTitle carusel={true}>Explore Our Products</SectionTitle>
                <div className="mt-5 flex gap-16 flex-wrap">
                {PRODUCTS.map(product => <ProductItem key={product.id} data={product} />)}
                </div>
                <Link className="mt-5 flex justify-center p-10">
                    <div className="bg-red-500 px-10 py-3 text-white rounded capitalize">View All Product</div>
                </Link>
            </div>

            <div className="flex justify-between text-center p-20">
                <div className="flex flex-col gap-2">
                    <div className="bg-stone-400 p-2 rounded-full w-16 self-center">
                        <div className="text-3xl p-2 bg-black rounded-full w-12 h-12 text-white flex justify-center"><FaShippingFast /></div>
                    </div>
                    <div>FREE AND FAST DELIVERY</div>
                    <div>Free delivery for all orders over $140</div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className="bg-stone-400 p-2 rounded-full w-16 self-center">
                        <div className="text-3xl p-2 bg-black rounded-full w-12 h-12 text-white flex justify-center"><FaHeadset /></div>
                    </div>
                    <div>FREE AND FAST DELIVERY</div>
                    <div>Free delivery for all orders over $140</div>
                </div>
                <div className="flex flex-col justify-center gap-2">
                    <div className="bg-stone-400 p-2 rounded-full w-16 self-center">
                        <div className="text-3xl p-2 bg-black rounded-full w-12 h-12 text-white flex justify-center"><IoShieldCheckmarkOutline /></div>
                    </div>
                    <div>FREE AND FAST DELIVERY</div>
                    <div>Free delivery for all orders over $140</div>
                </div>
            </div>

        </div>
    )
}

export default Dashboard
