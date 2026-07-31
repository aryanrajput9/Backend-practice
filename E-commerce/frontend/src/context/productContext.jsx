import { createContext, useEffect, useState } from "react";
import { useProductHook } from "../features/Home/hook/productHook";
import { useCategoryApi } from "../features/products/productApi/categoryApi";
import { useCommentApi } from "../features/products/productApi/productApi";





export const productsContext = createContext();

const useProductsContextProvider = ({ children }) => {

    const { getProductHook } = useProductHook();
    const { getCategory } = useCategoryApi()

    const [productsData, setProductsData] = useState([]);
    const [addCart, setAddCart] = useState(() => {
        const cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : []
    });

    const [category, setCategory] = useState([]);
    const [productdetails, setProductDetails] = useState([])


    const [load, setLoad] = useState(false);
    const [productId, setProductId] = useState();
    const [mode, setMode] = useState("Create");

    const [comment, setComment] = useState([]);


    const fetchComment = async (id) => {
        const allcomment = await useCommentApi.getCommentById(id);
        setComment(allcomment.data.data)
    }


    const fetchCategories = async () => {
        setLoad(true);

        try {
            const productCategory = await getCategory();

            setCategory(productCategory.category);
        } finally {
            setLoad(false);
        }
    };

    const fetchProduct = async () => {
        try {
            const allProduct = await getProductHook();


            setProductsData(allProduct.data.products)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {


        fetchCategories();
        fetchProduct();



    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(addCart)) || [];

    }, [addCart]);




    return <productsContext.Provider value={{
        productsData,
        setProductsData, addCart, setAddCart, category, setCategory, load,
        fetchCategories, productId, setProductId, mode, setMode, fetchProduct, productdetails, setProductDetails, fetchComment, comment, setComment
    }}>{children}</productsContext.Provider>
};


export default useProductsContextProvider