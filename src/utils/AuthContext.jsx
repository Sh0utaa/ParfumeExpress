import { useContext, useState, useEffect, createContext } from "react";
import { account } from "../appwriteConfig";
import { ID } from "appwrite";

const AuthContext = new createContext()

export const AuthProvider = ({children}) => {
    
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(false)

    useEffect(() => {
        checkUserStatus();
    }, [])

    const loginUser = async (userInfo) => {
        setLoading(true)
        try {
            let response = await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password
            )

            setUser(response)
        } catch (error) {
            console.error("loginUser error: " + error)
        }

        setLoading(false)
    }
    
    const logoutUser = () => {
        account.deleteSession('current')
        setUser(false)
    }

    const registerUser = async (userInfo) => {
        setLoading(true)
        try {
            let response = await account.create(
                ID.unique(),
                userInfo.email,
                userInfo.password1,
                userInfo.name
            )

            await account.createEmailPasswordSession(
                userInfo.email,
                userInfo.password1
            )
            setUser(response)
        } catch (error) {
            console.error("registerUser error: " + error)
        }

        setLoading(false)
    }

    const verifyUser = async () => {
        try {
            await account.createVerification("http://localhost:5173/verifyemail");
            alert("Verification link has been sent to " + account.email + "!");
        } catch (error) {
            console.error(error);
        }
    }

    const sendPasswordRecovery = async (userEmail) => {
        try {
            await account.createRecovery(userEmail, "http://localhost:5173/changepassword")
        } catch (error) {
            console.error(error);
        }
    }

    const checkUserStatus = async () => {
        try {
            let accountDetails = await account.get();   
            setUser(accountDetails)
        } catch (error) {
            
        }
        setLoading(false);
    }


    const contextData = {
        user,
        loginUser,
        logoutUser,
        registerUser,
        checkUserStatus,
        verifyUser,
        sendPasswordRecovery,
    }
    
    return (
        <AuthContext.Provider value={contextData}>
            {loading ? <p>Loading...</p> : children}
        </AuthContext.Provider>
    )
    
}

export const useAuth = () => {
    return useContext(AuthContext)
}

export default AuthContext 