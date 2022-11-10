import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
     const googleProvider = new GoogleAuthProvider();
     const [user, setUser] = useState();
     const [loading, setLoading] = useState(true);

     const createUser = (email, password) =>{
          setLoading(true)
          return createUserWithEmailAndPassword(auth, email, password);
     }     

     const signIn = (email, password) =>{
          setLoading(true)
          return signInWithEmailAndPassword(auth, email, password);
     }

     const googlePopUp = () =>{
          setLoading(true);
          return signInWithPopup(auth, googleProvider);
     }

     const logOut = () =>{
          setLoading(true)
          return signOut(auth);
     }

     useEffect( ()=>{
          const unsubscribe = onAuthStateChanged(auth, currentUser=>{
               console.log(currentUser);
               setUser(currentUser);
               setLoading(false);
          })
          return ()=> unsubscribe();
     },[])

     const authInfo = {user, loading, createUser,signIn,logOut,googlePopUp}
     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;