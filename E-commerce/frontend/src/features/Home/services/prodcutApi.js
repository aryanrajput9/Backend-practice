import { useGlobleApi } from "../../../services/globelApi";


export const useProductApi = () => {

    const createProduct = async () => {
        const response = await useGlobleApi.post("/product/createproduct");
        return response
    };

    const getProduct = async () => {
        const response = await useGlobleApi.get("/product/getallproduct");

        return response
    }


    return {
        createProduct, getProduct
    }
}