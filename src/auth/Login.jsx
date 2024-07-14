import { Link } from "react-router-dom"
import Button from "../users/components/Button"

function Login() {
    return (
        <div className="w-[90vw] m-auto">
            <div className="my-10 flex gap-60 ">
                
                <div className="bg-blue-400 w-[50%] h-[70vh] "></div>
                <div className="flex flex-col gap-5 justify-center">
                    <h2 className="text-3xl font-bold">Log in to Exclusive</h2>
                    <p className="text-sm">Enter your details below</p>
                    <form className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <label>Email or Phone Number</label>
                            <input type="text" className="border-b-2 border-stone-300 p-2 bg-stone-200 rounded" />
                        </div>
                        <div className="flex flex-col">
                            <label>Password</label>
                            <input type="password"  className="border-b-2 border-stone-300 p-2 bg-stone-200 rounded" />
                        </div>
                        <div className="flex gap-40">
                            <Button>Login</Button>
                            <Link className="flex flex-col justify-center text-red-500">Forget Password?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
