import { createContext, useEffect, useState } from "react";
import { useProductHook } from "../features/Home/hook/productHook";




export const productsContext = createContext();

const useProductsContextProvider = ({ children }) => {

    const { getProductHook } = useProductHook();

    const [productsData, setProductsData] = useState([]);
    const [addCart, setAddCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);



    useEffect(() => {
        const fetchProduct = async () => {

            const product = await getProductHook();

            setProductsData(product.data.products)

        }

        fetchProduct()
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(addCart));

    }, [addCart]);




    return <productsContext.Provider value={{ productsData, setProductsData, addCart, setAddCart }}>{children}</productsContext.Provider>
};


export default useProductsContextProvider