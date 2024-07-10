import CategoryList from "../components/CategoryList"




function Dashboard() {
    return (
        <div className="w-[80vw] m-auto flex">
            <CategoryList />
            <div className="p-10 w-full border-l-2 border-stone-200">
                <div className="bg-black w-full h-96"></div>
                <div className="bg-green-500 w-full h-96"></div>
                <div className="bg-blue-500 w-full h-96"></div>
                <div className="bg-yellow-500 w-full h-96"></div>
            </div>
        </div>
    )
}

export default Dashboard
