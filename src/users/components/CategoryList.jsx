import CategoryListItem from "./CategoryListItem";
import { CATEGORIES } from "../../datas";

function CategoryList() {
    return (
        <div className="p-10 w-1/4 h-[30rem] flex flex-col gap-5 overflow-auto">
            {CATEGORIES.map(cat => <CategoryListItem key={cat.id} data={cat} />)}
        </div>
    )
}

export default CategoryList
