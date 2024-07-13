import { Link } from "react-router-dom"
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

function Footer() {
    return (
        <div className="bg-black text-white">

        <div className="flex justify-around p-20">
        <div className="flex flex-col gap-5">
            <h2>Support</h2>
            <p>Georgia</p>
            <p>anrivarshanidze11@gmail.com</p>
            <p>+995 555344020</p>
        </div>
        <div className="flex flex-col gap-5">
            <h2>Accounts</h2>
            <Link>My Account</Link>
            <Link>Login / Register</Link>
            <Link>Cart</Link>
            <Link>Wishlist</Link>
            <Link>Shop</Link>
        </div>
        <div className="flex flex-col gap-5">
            <h2>Quick Link</h2>
            <Link>Privacy Policy</Link>
            <Link>Terms Of Use</Link>
            <Link>FAQ</Link>
            <Link>Contact</Link>
        </div>
        <div className="flex flex-col gap-5">
            <h2>See My Profiles</h2>
            <div className="flex gap-5">
            <Link to='https://www.linkedin.com/in/anri-varshanidze/' target="_blank" className="text-3xl"><CiLinkedin /></Link>
            <Link to='https://github.com/anri24' target="_blank" className="text-3xl"><FaGithub /></Link>
            </div>
        </div>
        
    </div>
    <div className="flex justify-center p-5 text-stone-700">&copy;Copyright Rimel 2024. All right reserved</div>
        </div>
    )
}

export default Footer
