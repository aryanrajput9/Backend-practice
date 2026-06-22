
import { useContext } from "react";
import { axiosInstance } from "../services/home.services";
import { MainContext } from "../../context/MainContext";

export const useGetUserLink = () => {
    const { setAlllinks, setUserLink, count } = useContext(MainContext)

    const fetchLink = async (name) => {

        try {
            const res = await axiosInstance.get(`/link/${name}`);


            setAlllinks(res.data.link);
            return res.data;
        } catch (error) {
            console.log("error in get link", error);
        }
    };
    const fetchLinkById = async (id) => {

        try {
            const res = await axiosInstance.get(`/link/profile/${id}`);

            setUserLink(res.data.link);
            return res.data;
        } catch (error) {
            console.log("error in get link", error);
        }
    };

    const updateCount = async (id) => {

        try {
            const countres = await axiosInstance.patch(`/link/count/${id}`, {
                count
            });
            return countres
        } catch (error) {
            console.log(error)
        }
    }

    return { fetchLink, fetchLinkById, updateCount };
};