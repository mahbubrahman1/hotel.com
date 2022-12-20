import { useEffect, useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initAuth from '../firebase/firebase.init';

initAuth();
const auth = getAuth()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user)
        })
    }, [])

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    const handleForm = (e) => {
        e.preventDefault()
    }

    return { user, handleGoogleSignIn, handleForm, handleLogout }
}

export default useFirebase