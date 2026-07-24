import { createContext, useEffect, useState } from "react";
import { useProductHook } from "../features/Home/hook/productHook";
import { useCategoryApi } from "../features/products/productApi/categoryApi";
import { data } from "react-router";




export const productsContext = createContext();

const useProductsContextProvider = ({ children }) => {

    const { getProductHook } = useProductHook();
    const { getCategory } = useCategoryApi()

    const [productsData, setProductsData] = useState([]);
    const [addCart, setAddCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);

    const [category, setCategory] = useState([]);


    const [load, setLoad] = useState(false);


    const fetchCategories = async () => {
        setLoad(true);

        try {
            const productCategory = await getCategory();
            const allProduct = await getProductHook();

            setProductsData(allProduct.data.products)
            setCategory(productCategory.category);
        } finally {
            setLoad(false);
        }
    };

    useEffect(() => {


        fetchCategories()
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(addCart));

    }, [addCart]);




    return <productsContext.Provider value={{ productsData, setProductsData, addCart, setAddCart, category, setCategory, load, fetchCategories }}>{children}</productsContext.Provider>
};


export default useProductsContextProvider