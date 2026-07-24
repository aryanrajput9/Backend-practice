import { useSelector } from "react-redux";
import { useGlobleApi } from "../../../services/globelApi";




export const useProductApi = () => {

    const { admindata } = useSelector((state) => state.admin)
    const id = admindata.id

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



    return {
        useCreateProductApi
    }
}


