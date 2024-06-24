// OrderContext.js
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