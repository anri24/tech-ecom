import Button from "../components/Button"

function CreateProduct() {
    return (
        <div>
            <form className="w-60 mx-auto flex flex-col gap-5 my-10"> 
                <div className="flex flex-col">
                    <label>Category</label>
                    <select className="bg-stone-200 p-2 rounded w-full">
                        <option>Select Category</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label>SubCategory</label>
                    <select className="bg-stone-200 p-2 rounded w-full">
                        <option>Select SubCategory</option>
                    </select>
                </div>
                <div className="flex flex-col">
                    <label>Name</label>
                    <input type="text" className="bg-stone-200 p-2 rounded" />
                </div>
                <div className="flex flex-col">
                    <label>price</label>
                    <input type="number"  className="bg-stone-200 p-2 rounded" />
                </div>
                <div className="flex flex-col">
                    <label>discount</label>
                    <input type="number"  className="bg-stone-200 p-2 rounded" />
                </div>
                <div className="flex flex-col">
                    <label>Description</label>
                    <textarea className="bg-stone-200 w-full p-2 h-20"></textarea>
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
