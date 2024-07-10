import { HiMagnifyingGlass } from "react-icons/hi2";

function SearchInput() {
    return (
        <div className="flex gap-2 bg-gray-200 rounded px-2">
            <input type="text" className="bg-gray-200 p-2 focus:outline-none" placeholder="Search..." />
            <button type="submit" className="text-2xl"><HiMagnifyingGlass /></button>
        </div>
    )
}

export default SearchInput
