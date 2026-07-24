import { useSelector } from "react-redux";
import { useGlobleApi } from "../../../services/globelApi";



export const useCategoryApi = () => {


    const { admindata } = useSelector((state) => state.admin)
    const id = admindata?.id;


    const craeteCategory = async (name, slug, image, isActive) => {
        const categoryresp = await useGlobleApi.post("/category/createcategory", {
            name,
            slug,
            image,
            isActive,
            id
        });

        return categoryresp
    }

    const getCategory = async () => {
        const resp = await useGlobleApi.get("/category/getCatehory");
        return resp.data
    };


    const updateCategoryApi = async (id, data) => {

        const resp = await useGlobleApi.patch(`/category/editCategory/${id}`, data);


        return resp
    };

    const deleteCategoryApi = async (id) => {

        const resp = await useGlobleApi.delete(`/category/deletecategory/${id}`);
        getCategory()
        return resp
    }



    return { getCategory, craeteCategory, updateCategoryApi, deleteCategoryApi }
}
