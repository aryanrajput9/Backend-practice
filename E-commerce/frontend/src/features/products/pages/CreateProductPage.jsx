import React, { useState } from "react";
import ProductForm from "../component/ProductForm";
import AllProducts from "../component/AllProducts";
import StatsCards from "../component/StatsCards";

function CreateProductPage() {
    const [tab, setTab] = useState(false);

    return (
        <div className="h-[100%] bg-[#0B1120] p-8">

            <StatsCards setTab={setTab} />

            <div className="grid grid-cols-12 gap-6 mt-6">

                <div className={tab ? "col-span-8" : "col-span-12"}>
                    <AllProducts />
                </div>

                {tab && (
                    <div className="col-span-4 animate-slide">
                        <ProductForm setTab={setTab} />
                    </div>
                )}

            </div>

        </div>
    );
}

export default CreateProductPage;