import { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
    const [alllinks, setAlllinks] = useState([]);
    const [loginUser, setLoginUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userlink, setUserLink] = useState([]);
    const [count, setUpdateCount] = useState(1)




    return (
        <MainContext.Provider
            value={{
                alllinks,
                setAlllinks,
                loginUser,
                setLoginUser,
                loading, setLoading,
                userlink, setUserLink,
                count, setUpdateCount
            }}
        >
            {children}
        </MainContext.Provider>
    );
};