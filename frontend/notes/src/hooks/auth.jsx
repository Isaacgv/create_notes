import { createContext, useContext, useState, useEffect } from "react";
import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function singIn({ email, password }) {

        try{
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@notes:user", JSON.stringify(user));
            localStorage.setItem("@notes:token", token);

            api.defaults.headers.authorization = `Beare ${token}`;
            setData({ user, token });
            console.log(response);
        } catch (error){
            if (error.response) {
                alert(error.response.data.mpessage);
            } else {
                alert("Impossivel to enter");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@notes:token");
        const user = localStorage.getItem("@notes:user");

        if (token && user) {
            api.defaults.headers.authorization = `Bearer ${token}`;

            setData({
                token,
                user: JSON.parse(user)
            })
        }

    }, [])
    return (
        <AuthContext.Provider value={{ singIn, user: data.user }}>
            {children}
        </AuthContext.Provider>
    )
}


function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

export { AuthProvider, useAuth };