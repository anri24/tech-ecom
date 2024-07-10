import { HiChevronRight } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";

function CategoryList() {
    return (
        <div className="p-10 w-1/4 flex flex-col gap-5">
        <div className="flex justify-between text-center">
            <div>Woman’s Fashion</div>
            <div className="text-2xl"><HiChevronRight /></div>
        </div>
        <div>
        <div className="flex justify-between text-center">
            <div>Men’s Fashion</div>
            <div className="text-2xl"><HiChevronDown /></div>
        </div>
        </div>
        <div>
            Electronics
        </div>
    </div>
    )
}

export default CategoryList
