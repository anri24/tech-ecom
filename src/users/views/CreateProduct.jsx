import { useRef, useState } from "react"
import Button from "../components/Button"
import { useEffect } from "react";
import axiosClient from "../../axios-client";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvicer";

function CreateProduct() {
    const navigate = useNavigate();
    const nameRef = useRef();
    const priceRef = useRef();
    const discountRef = useRef();
    const descriptionRef = useRef();

    const {
        categories, getCategories, 
        selectedCategories, setSelectedCategories, 
        subCategories, getSubCategories, 
        selectedSubCategories, setSelectedSubCategories
    } = useStateContext();

    useEffect(() => {
        getCategories();
    }, []);

    useEffect(() => {
        getSubCategories();
    }, [
        selectedCategories
    ]);

    function handleUploadProduct(e){
        e.preventDefault();
        
        const data = {
            category_id: selectedSubCategories,
            name: nameRef.current.value,
            price: priceRef.current.value,
            discount: discountRef.current.value,
            description: descriptionRef.current.value,
        }

        axiosClient.post('/product/store',data)
        .then(() => {
            navigate('/')
        })
    }


    return (
        <div>
            <form onSubmit={handleUploadProduct} className="w-60 mx-auto flex flex-col gap-5 my-10"> 
                <div className="flex flex-col">
                    <label>Category</label>
                    <select className="bg-stone-200 p-2 rounded w-full" value={selectedCategories ? selectedCategories : ''} onChange={(e) => setSelectedCategories(e.target.value)}>
                        <option>Select Category</option>
                        {categories.map(cat => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label>SubCategory</label>
                    <select disabled={!selectedCategories} value={selectedSubCategories ? selectedSubCategories : ''} onChange={(e) => setSelectedSubCategories(e.target.value)} className="bg-stone-200 p-2 rounded w-full">
                        <option>Select SubCategory</option>
                        {subCategories.map(subcat => (
                            <option key={subcat.id} value={subcat.id}>{subcat.name}</option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col">
                    <label>Name</label>
                    <input ref={nameRef} type="text" className="bg-stone-200 p-2 rounded" />
                </div>
                <div className="flex flex-col">
                    <label>price</label>
                    <input ref={priceRef} type="number"  className="bg-stone-200 p-2 rounded" />
                </div>
                <div className="flex flex-col">
                    <label>discount</label>
                    <input ref={discountRef} type="number"  className="bg-stone-200 p-2 rounded" defaultValue={0} />
                </div>
                <div className="flex flex-col">
                    <label>Description</label>
                    <textarea ref={descriptionRef} className="bg-stone-200 w-full p-2 h-20"></textarea>
                </div>
                <div className="my-10">
                    <label htmlFor="images" className="bg-stone-200 w-full h-20 px-24 py-12">Images</label>
                    <input id="images" type="file" multiple className="hidden" />
                </div>
                <Button>Upload</Button>
            </form>
        </div>
    )
}

export default CreateProduct
