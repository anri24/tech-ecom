import { Link, useResolvedPath } from "react-router-dom"
import TopHeader from "./TopHeader"
import { HiOutlineHeart } from "react-icons/hi2";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import SearchInput from "./SearchInput";
import { useState } from "react";
import { useStateContext } from "../../contexts/ContextProvicer";




function Header() {
    const [dropIsOpen, setDropIsOpen] = useState(false)
    const {token} = useStateContext();

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
                    <Link to='/wishlist' className="text-2xl p-2"><HiOutlineHeart /></Link>
                    <Link to='/cart' className="text-2xl p-2"><HiOutlineShoppingCart /></Link>
                    <div className="relative">
                        <button className="text-2xl p-2" onClick={() => setDropIsOpen(open => !open)}><HiOutlineUserCircle /></button>
                        {dropIsOpen && (
                            <div className="flex flex-col absolute w-40 top-10 right-0 bg-stone-200 mt-5 p-2 gap-2">
                                {token ?(
                                    <>
                                        <Link to='/login' className="hover:bg-stone-300 p-2">Login</Link>
                                        <Link to='/register' className="hover:bg-stone-300 p-2">Register</Link>
                                    </>)
                                    :
                                    (<>
                                        <Link to='/product_create' className="hover:bg-stone-300 p-2">Create Product</Link>
                                        <button className="hover:bg-stone-300 p-2">Logout</button>
                                    </>)
                                    
                                }
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
