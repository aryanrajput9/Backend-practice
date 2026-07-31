import { useGlobleApi } from "../../../services/globelApi";


export const useProductApi = () => {

    const createProduct = async () => {
        const response = await useGlobleApi.post("/product/createproduct");
        return response
    };

    const getProduct = async () => {
        const response = await useGlobleApi.get("/product/getallproduct");

        return response
    };


    const getProductById = async (id) => {
        const resp = await useGlobleApi.get(`/product/getproduct/${id}`);
        return resp
    }


    return {
        createProduct, getProduct, getProductById
    }
}