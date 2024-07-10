import { Link, useResolvedPath } from "react-router-dom"
import TopHeader from "./TopHeader"
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi";
import SearchInput from "./SearchInput";




function Header() {
    const path = useResolvedPath();
    return (
        <div className="border-b-2 border-stone-200">
            <TopHeader />
            <div className="w-[80vw] mx-auto flex justify-between text-center p-10">
                <Link to='/' className="p-2 ">Logo</Link>
                <div className="flex  gap-20  p-2">
                    <Link to='/' className={`${path.pathname === '/' ? 'border-b-2 border-stone-400' : ''}`}>Home</Link>
                    <Link to='/contact' className={`${path.pathname === '/contact' ? 'border-b-2 border-stone-400' : ''}`}>Contact</Link>
                    <Link to='/about' className={`${path.pathname === '/about' ? 'border-b-2 border-stone-400' : ''}`}>About</Link>
                    <Link to='/signup' className={`${path.pathname === '/signup' ? 'border-b-2 border-stone-400' : ''}`}>Sign Up</Link>
                </div>
                <div className="flex justify-between text-center gap-10">
                    <SearchInput />
                    <Link className="text-2xl p-2"><HiOutlineHeart /></Link>
                    <Link className="text-2xl p-2"><HiOutlineShoppingCart /></Link>
                </div>
            </div>
        </div>
    )
}

export default Header
