import Button from "../components/Button"
import { SlPhone } from "react-icons/sl";
import { CiMail } from "react-icons/ci";



function Contact() {
    return (
        <div className="my-40">
            <div className="flex justify-center gap-10 mt-20 w-[80vw] mx-auto">
                <div className="flex flex-col gap-5 shadow-lg p-10 w-[20vw]">
                    <div className="border-b-2 border-black py-5  flex flex-col gap-2">
                        <div className="flex gap-5">
                            <span className="text-2xl bg-red-500 text-white p-2 rounded-full"><SlPhone /></span>
                            <span className="self-center">Call To Us</span>
                        </div>
                        <div>We are available 24/7, 7 days a week.</div>
                        <a href="tel:+995555344020">Phone: +995555344020</a>
                    </div>
                    <div className="py-5 flex flex-col gap-2">
                        <div className="flex gap-5">
                            <span className="text-2xl bg-red-500 text-white p-2 rounded-full"><CiMail /></span>
                            <span className="self-center">Write To US</span>
                        </div>
                        <div className="text-wrap">Fill out our form and we will contact you within 24 hours.</div>
                        <a href="mailto:anrivarshanidze11@gmail.com">Emails: anrivarshanidze11@gmail.com</a>
                    </div>
                </div>
                <form className="flex flex-col gap-5 w-[40vw] shadow-lg p-10">
                    <div className="flex justify-between flex-wrap gap-5">
                        <input className="bg-stone-200 p-2 rounded" placeholder="Your Name" />
                        <input className="bg-stone-200 p-2 rounded" placeholder="Your Email"/>
                        <input className="bg-stone-200 p-2 rounded" placeholder="Your Phone" />
                    </div>
                    <textarea className="bg-stone-200 p-2 rounded h-40" placeholder="Your Massage"></textarea>
                    <Button className="w-[10vw] self-end">Send Massage</Button>
                    
                </form>
                
            </div>
        </div>
    )
}

export default Contact
