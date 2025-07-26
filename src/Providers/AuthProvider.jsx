import { useEffect, useState } from "react";
import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,  } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

 export const AuthContext = createContext(null);
 const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const[loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignIn = () => {
        setLoading(true);
        console.log("Google Provider: ", googleProvider); // Debugging log
        return signInWithPopup(auth, googleProvider);
    };


    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }
   
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        logout,
        updateUserProfile,
    }

    useEffect(() =>{
      const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        if(currentUser){
            const userInfo = {email:currentUser.email};
            axiosPublic.post('/jwt',userInfo)
            .then(res =>{
                if (res.data.token){
                    localStorage.setItem('access-token',res.data.token);
                    setLoading(false);
                }
            })
        }
        else{
           localStorage.removeItem('access-token');
           setLoading(false);
        }
        
       }) 
       return () =>{
        return unsubscribe();
       }
    },[axiosPublic])



    return (
       <AuthContext.Provider value={authInfo}>
            {children}
       </AuthContext.Provider> 
    );
};

export default AuthProvider;
