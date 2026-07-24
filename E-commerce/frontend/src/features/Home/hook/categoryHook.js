import { useForm } from "react-hook-form";
import { useCategoryApi } from "../../products/productApi/categoryApi";
import { useContext } from "react";
import { productsContext } from "../../../context/productContext";


export const useCategoryHook = () => {

    const { craeteCategory } = useCategoryApi();
    const { setCategory, fetchCategories } = useContext(productsContext)

    const useCreateCategoryHook = () => {
        const { register, handleSubmit, reset, formState: { errors } } = useForm();


        const useSubmitOfCategory = async (data) => {

            const { name, slug, image } = data;

            const categorys = await craeteCategory(name, slug, image);

            fetchCategories()


            reset()
        };

        return {
            register, handleSubmit, errors, useSubmitOfCategory
        }
    };


    return {
        useCreateCategoryHook
    }
}