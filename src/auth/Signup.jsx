import { Link } from "react-router-dom"
import Button from "../users/components/Button"

function Signup() {
    return (
        <div className="w-[90vw] m-auto">
            <div className="my-10 flex gap-60 ">
                
                <div className="bg-blue-400 w-[50%] h-[70vh] "></div>
                <div className="flex flex-col gap-5 justify-center">
                    <h2 className="text-3xl font-bold">Create an account</h2>
                    <p className="text-sm">Enter your details below</p>
                    <form className="flex flex-col gap-10 w-[20vw]">
                    <div className="flex flex-col">
                            <label>Name</label>
                            <input type="text" className="border-b-2 border-stone-300 p-2 bg-stone-200 rounded" />
                        </div>
                        <div className="flex flex-col">
                            <label>Email or Phone Number</label>
                            <input type="text" className="border-b-2 border-stone-300 p-2 bg-stone-200 rounded" />
                        </div>
                        <div className="flex flex-col">
                            <label>Password</label>
                            <input type="password"  className="border-b-2 border-stone-300 p-2 bg-stone-200 rounded" />
                        </div>
                        <div className="flex flex-col gap-10 text-center">
                            <Button>Create account</Button>
                            <div className="flex justify-around">
                                <span>Already have account?</span>
                                <Link to='/login' className="border-b-2 border-stone-400">Log in</Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Signup
