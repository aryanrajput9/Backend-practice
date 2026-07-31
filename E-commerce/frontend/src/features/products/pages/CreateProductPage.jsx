import React, { useContext, useState } from "react";
import ProductForm from "../component/ProductForm";
import AllProducts from "../component/AllProducts";
import StatsCards from "../component/StatsCards";
import { productsContext } from "../../../context/productContext";
import DeleteProduct from "../component/DeleteProduct";


function CreateProductPage() {
    const [tab, setTab] = useState(false);
    const { mode, setMode } = useContext(productsContext)
    const [deleteProduct, setDeleteProduct] = useState(false)





    return (
        <div className="h-[100%] bg-[#0B1120] p-8 relative">

            <StatsCards mode={mode} setMode={setMode} setTab={setTab} />

            <div className="grid grid-cols-12 gap-6 mt-6">

                <div className={tab ? "col-span-8" : "col-span-12"}>
                    <AllProducts setTab={setTab} setMode={setMode} deleteProduct={deleteProduct} setDeleteProduct={setDeleteProduct} />
                </div>

                {tab && (
                    <div className="col-span-4 animate-slide">
                        <ProductForm setTab={setTab} mode={mode} />
                    </div>
                )}

            </div>
            <div className="absolute top-1/2 left-1/2 transform translate-y-[-50%] translate-x-[-50%] w-full">{deleteProduct === false ? " " : <DeleteProduct setDeleteProduct={setDeleteProduct} />}</div>

        </div>
    );
}

export default CreateProductPage;