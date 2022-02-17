import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
    initializeAuthentication()

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setError] = useState('');


    const auth = getAuth();

    const register = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser);
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                navigate('/home')
            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false));
    }


    const login = (email, password, location, navigate) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/'
                navigate(destination)
                setError('')
            })
            .catch((error) => {
                setError(error.message);

            })
            .finally(() => setIsLoading(false));

    }

    const logout = () => {
        signOut(auth)
            .then(() => {

            })
            .catch((error) => {
                // An error happened.
            })

    }



    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user);

            } else {
                setUser({})

            }
            setIsLoading(false)
        });
    }, [auth])






    return { user, register, login, logout, isLoading, setIsLoading, authError }

}
export default useFirebase;