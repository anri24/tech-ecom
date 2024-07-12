import SectionSmallTitle from "./SectionSmallTitle"
import SectionTitle from "./SectionTitle"

function CategoriesCarousel() {
    return (
        <div className="mt-20 border-b-2 border-stone-200">
        <SectionSmallTitle>Categories</SectionSmallTitle>
        <SectionTitle carusel={true}>Browse By Category</SectionTitle>
        <div className="p-5 flex gap-5">
            <div className="w-40 h-40 border-2 border-stone-300 flex flex-col justify-center text-center gap-2 p-2">
                <div>
                    <svg viewBox="0 0 64 64" fill="currentColor" height="5em" width="auto">
                        <g fill="none" stroke="currentColor" strokeMiterlimit={10} strokeWidth={2}>
                            <path d="M16 1h32v62H16zM28 5h8M16 51h32M16 9h32" />
                            <path strokeLinejoin="bevel" d="M34 57 A2 2 0 0 1 32 59 A2 2 0 0 1 30 57 A2 2 0 0 1 34 57 z"/>
                        </g>
                    </svg>
                </div>
                <div>Phones</div>
            </div>
        </div>
    </div>
    )
}

export default CategoriesCarousel
