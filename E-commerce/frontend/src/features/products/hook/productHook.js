import { useForm } from "react-hook-form";
import { useProductApi } from "../productApi/productApi";
import { useCategoryApi } from "../productApi/categoryApi";
import { useContext } from "react";
import { productsContext } from "../../../context/productContext";


export const useProductHook = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const { useCreateProductApi } = useProductApi();
    const { category } = useContext(productsContext)
    const useCreateProductHook = () => {


        const useSubmitCreateProduct = (data) => {
            const {
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
            } = data;
            console.log(data)

            //prodcut
            const product = useCreateProductApi(
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
                isActive,);

            //category

            reset()
        };

        return { register, handleSubmit, errors, useSubmitCreateProduct, category }
    };



    return {
        useCreateProductHook
    }

}


export const useCategoryHook = (id) => {

    const { setCategory, fetchCategories } = useContext(productsContext)

    const { updateCategoryApi, deleteCategoryApi } = useCategoryApi()


    const updateCategory = async (data) => {

        const resp = await updateCategoryApi(id, data);



        setCategory((prev) =>
            prev.map((cat) =>
                cat._id === id ? resp.data.data : cat
            )
        );
        fetchCategories()

    };

    const deletecategory = async (id) => {
        const deleteresp = await deleteCategoryApi(id);

        setCategory((prev) => {
            prev.filter((elem) => elem._id !== id);
        })

        fetchCategories()

        return deleteresp
    }

    return {
        updateCategory, deletecategory
    }

}