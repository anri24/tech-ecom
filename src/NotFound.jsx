import { Link } from "react-router-dom"

function NotFound() {
    return (
        <div>
            <div className="my-40 w-[80vw] mx-auto text-center flex flex-col gap-10">
                <div className="text-8xl font-semibold">404 Not Found</div>
                <div>Your visited page not found. You may go home page.</div>
                <Link to='/' className="mt-5 flex justify-center p-10">
                    <div className="bg-red-500 px-10 py-3 text-white rounded capitalize">Back to home page</div>
                </Link>
            </div>
        </div>
    )
}

export default NotFound
