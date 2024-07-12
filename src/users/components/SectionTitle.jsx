import { HiArrowSmallLeft } from "react-icons/hi2";
import { HiArrowSmallRight } from "react-icons/hi2";

function SectionTitle({children, timer, carusel}) {
    return (
            <div className="flex justify-between">
                    <div className="flex gap-32">
                    <div className="text-3xl font-bold capitalize p-5">{children}</div>
                        {timer && <div className="flex">
                            <div>
                            <div className="text-xs font-bold capitalize">Days</div>
                            <div className="text-3xl font-bold">03</div>
                            </div>

                            <div className="text-3xl p-3 text-red-400">
                                :
                            </div>
                            
                            <div>
                            <div className="text-xs font-bold capitalize">Hours</div>
                            <div className="text-3xl font-bold">03</div>
                            </div>

                            <div className="text-3xl p-3 text-red-400">
                                :
                            </div>

                            <div>
                            <div className="text-xs font-bold capitalize">Minutes</div>
                            <div className="text-3xl font-bold">03</div>
                            </div>

                            <div className="text-3xl p-3 text-red-400">
                                :
                            </div>

                            <div>
                            <div className="text-xs font-bold capitalize">Seconds</div>
                            <div className="text-3xl font-bold">03</div>
                            </div>  
                        </div>}
                    </div>
                    {carusel && <div className="flex gap-5 p-5 text-2xl">
                        <div className="bg-stone-200 p-2 rounded-3xl"><HiArrowSmallLeft /></div>
                        <div className="bg-stone-200 p-2 rounded-3xl"><HiArrowSmallRight /></div>
                    </div>}
                </div>
    )
}

export default SectionTitle
