import { useState } from "react";
import { HiChevronRight } from "react-icons/hi2";
import { HiChevronDown } from "react-icons/hi2";
import { Link } from "react-router-dom";

function CategoryListItem({data}) {
    const [isCatOpen, setIsCatOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-between text-center">
            <Link>{data.name}</Link>
           {data.children.length > 0 ? <div className="text-2xl" onClick={() => setIsCatOpen(isOpen => !isOpen)}>{isCatOpen ? <HiChevronDown /> : <HiChevronRight />}</div> : ''}
            </div>
            {isCatOpen && (
                <div className="pt-5 pl-5 flex flex-col gap-3">
                    {data.children.map(subcat => <Link className="capitalize" key={subcat.id}>{subcat.name}</Link>)}
                </div>
            )}
        </div>
    )
}

export default CategoryListItem
