import { createContext,useContext,useState } from "react";

const AuthContext = createContext();

export default function AuthProvider({ Children }) {
    const [user, setUser] = useState(null);

    return (
        <AuthContext.Provider value={{ user, setUser,logout }}>
            {Children}
        </AuthContext.Provider>
    );
}
export function useAuth()
{
    return useContext(AuthContext);

}