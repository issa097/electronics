import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useOrder must be used within an OrderProvider');
    }
    return context;
};

export const UserProvider = ({ children }) => {
    const [users, setUsers] = useState([]);

    const setuserData = (data) => {
        setUsers(data);
    };

    return (
        <UserContext.Provider value={{ users, setuserData }}>
            {children}
        </UserContext.Provider>
    );
};



const CatContext = createContext();

export const useCat = () => {
    const context = useContext(CatContext);
    if (!context) {
        throw new Error('useOrder must be used within an OrderProvider');
    }
    return context;
};

export const CatProvider = ({ children }) => {
    const [cat, setCat] = useState([]);

    const setcatData = (data) => {
        setCat(data);
    };

    return (
        <CatContext.Provider value={{ cat, setcatData }}>
            {children}
        </CatContext.Provider>
    );
};








const SubCatContext = createContext();

export const useSubCat = () => {
    const context = useContext(SubCatContext);
    if (!context) {
        throw new Error('useOrder must be used within an OrderProvider');
    }
    return context;
};

export const SubCatProvider = ({ children }) => {
    const [subCat, setSubCat] = useState([]);

    const setSubcatData = (data) => {
        setSubCat(data);
    };

    return (
        <SubCatContext.Provider value={{ subCat, setSubcatData }}>
            {children}
        </SubCatContext.Provider>
    );
};