import { CATEGORIES } from "../../datas"
import SectionSmallTitle from "./SectionSmallTitle"
import SectionTitle from "./SectionTitle"

function CategoriesCarousel() {
    return (
        <div className="mt-20 border-b-2 border-stone-200">
        <SectionSmallTitle>Categories</SectionSmallTitle>
        <SectionTitle carusel={true}>Browse By Category</SectionTitle>
        <div className="p-5 flex gap-5">
            {CATEGORIES.map(cat => (
                <div key={cat.id} className="w-40 h-40 border-2 border-stone-300 flex flex-col justify-center text-center gap-2 p-2">
                <div dangerouslySetInnerHTML={{__html: cat.svg}}></div>
                <div>{cat.name}</div>
            </div>
            ))}
        </div>
    </div>
    )
}

export default CategoriesCarousel
