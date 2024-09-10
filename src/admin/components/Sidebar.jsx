import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <div className="w-[10%] absolute h-full bg-blue-600 flex flex-col text-center text-white">
            <Link to='/admin' className="p-3">logo</Link>
            <div className="flex flex-col gap-3 mt-10 ">
                <Link to='/categories'>Categories</Link>
                <Link to='/products'>Products</Link>
                <Link to='/users'>Users</Link>
            </div>
        </div>
    )
}

export default Sidebar
