import { Link } from "react-router-dom"
import Button from "../users/components/Button"
import { useRef } from "react"
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvicer";

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const {setUser, setToken} = useStateContext();

    function handleLogin(e){
        e.preventDefault();
        const data = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        axiosClient.post('/login', data)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)           
        })
    }


    return (
        <div className="w-[90vw] m-auto">
            <div className="my-10 flex gap-60 ">
                
                <div className="bg-blue-400 w-[50%] h-[70vh] "></div>
                <div className="flex flex-col gap-5 justify-center">
                    <h2 className="text-3xl font-bold">Log in to Exclusive</h2>
                    <p className="text-sm">Enter your details below</p>
                    <form onSubmit={handleLogin} className="flex flex-col gap-10">
                        <div className="flex flex-col">
                            <label>Email or Phone Number</label>
                            <input ref={emailRef} type="email" className="border-b-2 border-stone-300 p-2 bg-stone-200 rounded" required />
                        </div>
                        <div className="flex flex-col">
                            <label>Password</label>
                            <input ref={passwordRef} type="password"  className="border-b-2 border-stone-300 p-2 bg-stone-200 rounded" required />
                        </div>
                        <div className="flex gap-40">
                            <Button>Login</Button>
                            <Link className="flex flex-col justify-center text-red-500">Forget Password?</Link>
                        </div>
                        <div className="w-[100%] text-center bg-stone-200 px-10 py-3 rounded">
                            <Link to='http://localhost:8000/auth/google/redirect'>Login with google</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
