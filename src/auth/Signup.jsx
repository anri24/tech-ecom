import { Link } from "react-router-dom"
import Button from "../users/components/Button"
import { useRef } from "react"
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvicer";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

function Signup() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const {setUser, setToken, googleAuth} = useStateContext();

    function registerHandle(e){
        e.preventDefault();
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmRef.current.value,
        }

        axiosClient.post('/register', data)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
        });
    }

    return (
        <div className="w-[90vw] m-auto">
            <div className="my-10 flex gap-60 ">
                
                <div className="bg-blue-400 w-[50%] h-[70vh] "></div>
                <div className="flex flex-col gap-5 justify-center">
                    <h2 className="text-3xl font-bold">Create an account</h2>
                    <p className="text-sm">Enter your details below</p>
                    <form onSubmit={registerHandle} className="flex flex-col gap-10 w-[20vw]">
                    <div className="flex flex-col">
                            <label>Name</label>
                            <input ref={nameRef} type="text" className="border-b-2 border-stone-300 p-2 bg-stone-200 rounded" />
                        </div>
                        <div className="flex flex-col">
                            <label>Email or Phone Number</label>
                            <input ref={emailRef} type="text" className="border-b-2 border-stone-300 p-2 bg-stone-200 rounded" />
                        </div>
                        <div className="flex flex-col">
                            <label>Password</label>
                            <input ref={passwordRef} type="password"  className="border-b-2 border-stone-300 p-2 bg-stone-200 rounded" />
                        </div>
                        <div className="flex flex-col">
                            <label>Confirm Password</label>
                            <input ref={passwordConfirmRef} type="password"  className="border-b-2 border-stone-300 p-2 bg-stone-200 rounded" />
                        </div>
                        <div className="flex flex-col gap-10 text-center">
                            <Button>Create account</Button>

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
