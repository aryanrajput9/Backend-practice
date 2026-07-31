import { useSelector } from "react-redux";
import { useGlobleApi } from "../../../services/globelApi";
import { useContext } from "react";
import { productsContext } from "../../../context/productContext";






export const useProductApi = () => {

    const { admindata } = useSelector((state) => state.admin)
    const id = admindata.id;
    const { productId, fetchProduct } = useContext(productsContext);




    const useCreateProductApi = async (
        title,
        description,
        stock,
        price,
        category,
        brand,
        images,
        rating,
        totalReviews,
        isFeatured,
        isActive,

    ) => {

        const resp = await useGlobleApi.post("/product/createproduct", {
            title,
            description,
            stock,
            price,
            category,
            brand,
            images,
            rating,
            totalReviews,
            isFeatured,
            isActive,
            id
        });


        return {
            resp,
        };
    }

    const useUpdateProductApi = async (data) => {

        const resp = await useGlobleApi.patch(`/product/updateproduct/${productId}`, data);
        fetchProduct()
        return resp
    };

    const deleteProductApi = async () => {
        const resp = await useGlobleApi.delete(`/product/deleteproduct/${productId}`);
        fetchProduct()
        return resp
    }




    return {
        useCreateProductApi, useUpdateProductApi, deleteProductApi,
    }
}


export const useCommentApi = {

    async createCommentApi(data) {
        const resp = await useGlobleApi.post("/comment/createComment", data);
        return resp
    },
    async getCommentById(id) {
        const resp = await useGlobleApi.get(`/comment/findcomment/${id}`);
        return resp
    }
}