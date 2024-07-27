import { Link } from "react-router-dom"
import Button from "../users/components/Button"
import { useRef } from "react"
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvicer";
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";



function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();

    const {setUser, setToken, googleAuth} = useStateContext();

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
                        <GoogleLogin
                            onSuccess={credentialResponse => {
                                const credentialsDecode = jwtDecode(credentialResponse.credential)
                                // console.log(credentialsDecode)
                                googleAuth(credentialsDecode)
                            }}
                            onError={() => {
                                console.log('Login Failed');
                            }}
                            />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
