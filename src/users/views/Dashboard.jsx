import CategoryList from "../components/CategoryList"




function Dashboard() {
    return (
        <div className="w-[80vw] m-auto flex">
            <CategoryList />
            <div className="p-10 w-full border-l-2 border-stone-200">
                board
            </div>
        </div>
    )
}

export default Dashboard
