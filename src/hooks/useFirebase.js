import { useEffect, useState } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initAuth from '../firebase/firebase.init';

initAuth();
const auth = getAuth()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true);

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        })
    }, [])

    const handleLogout = () => {
        setIsLoading(true)

        signOut(auth)
            .then(() => {
                setUser({})
                    .finally(() => setIsLoading(false))
            })
    }

    const handleForm = (e) => {
        e.preventDefault()
    }

    return { user, handleGoogleSignIn, handleForm, handleLogout, isLoading }
}

export default useFirebase