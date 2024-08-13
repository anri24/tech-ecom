import CategoryListItem from "./CategoryListItem";
import { CATEGORIES } from "../../datas";
import { useEffect } from "react";
import { useStateContext } from "../../contexts/ContextProvicer";





function CategoryList() {
    const {categories, getCategories} = useStateContext();


    useEffect(function(){
        getCategories();
    }, []);


    return (
        <div className="p-10 w-1/4 h-[30rem] flex flex-col gap-5 overflow-auto">
            {categories.map(cat => <CategoryListItem key={cat.id} data={cat} />)}
        </div>
    )
}

export default CategoryList
