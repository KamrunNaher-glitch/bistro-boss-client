import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useAuth = () => {
   
    const {user,loading} = useContext(AuthContext);
    return {user,loading};}
    
export default useAuth;