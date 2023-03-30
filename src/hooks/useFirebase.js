import initializeAuthentication from "../Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, sendPasswordResetEmail } from "firebase/auth";
import { useEffect, useState } from "react";


const useFirebase = () => {
    initializeAuthentication()

    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setError] = useState('');
    const [admin, setAdmin] = useState(false)


    const auth = getAuth();

    const register = (email, password, name, navigate) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setError('')
                const newUser = { email, displayName: name }
                setUser(newUser);
                //send name to firebase after creation
                saveUser(email, name);

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

    const resetPassword = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {

            })
            .catch((error) => {
                // An error happened.
            })

    }
    const saveUser = (email, name) => {
        const user = { email, name };
        fetch("https://ontik-shop.onrender.com/users", {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(user),
        }).then();
    };

    useEffect(() => {
        fetch(`https://ontik-shop.onrender.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))

    }, [user.email])


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






    return { user, admin, register, login, logout, isLoading, setIsLoading, authError, resetPassword }

}
export default useFirebase;