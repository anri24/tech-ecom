function SectionSmallTitle({children}) {
    return (
            <div className="text-red-500 font-bold capitalize flex gap-2">
                    <div className="w-5 h-10 bg-red-500 rounded"></div>
                    <div className="h-5 p-2">{children}</div>
            </div>
    )
}

export default SectionSmallTitle
