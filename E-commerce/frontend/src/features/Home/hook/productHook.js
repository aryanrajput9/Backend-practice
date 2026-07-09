import { useProductApi } from "../services/prodcutApi";



export const useProductHook = () => {

    const { getProduct } = useProductApi();


    const getProductHook = async () => {
        const product = await getProduct();
        return product
    }


    return {
        getProductHook
    }
}