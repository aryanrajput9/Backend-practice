import { createContext, useEffect, useState } from "react";
import { useProductHook } from "../features/Home/hook/productHook";




export const productsContext = createContext();

const useProductsContextProvider = ({ children }) => {

    const { getProductHook } = useProductHook();

    const [productsData, setProductsData] = useState([]);
    const [addCart, setAddCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
    const [quantity, setQuntity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {

            const product = await getProductHook();

            let updateProduct = [...addCart];
            setProductsData(product.data.products)
            localStorage.setItem("cart", JSON.stringify(updateProduct))
        }

        fetchProduct()
    }, [addCart])


    return <productsContext.Provider value={{ productsData, setProductsData, addCart, setAddCart, quantity, setQuntity }}>{children}</productsContext.Provider>
};


export default useProductsContextProvider