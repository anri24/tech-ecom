import CategoryList from "../components/CategoryList"
import SectionSmallTitle from "../components/SectionSmallTitle";
import SectionTitle from "../components/SectionTitle";
import ProductItem from "../components/ProductItem";
import { Link } from "react-router-dom";
import CategoriesCarousel from "../components/CategoriesCarousel";
import { PRODUCTS } from "../../datas";
import Guaranties from "../components/Guaranties";

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

            <Guaranties />

        </div>
    )
}

export default Dashboard
