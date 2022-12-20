import { useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import initAuth from '../firebase/firebase.init';

initAuth();
const auth = getAuth()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user)
                console.log(user);
            })
    }

    return { user, handleGoogleSignIn }
}

export default useFirebase