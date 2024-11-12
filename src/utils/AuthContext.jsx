import { useContext, useState, useEffect, createContext } from "react";
import { account } from "../appwriteConfig";
import { ID } from "appwrite";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null); // Use `null` for no user

  useEffect(() => {
    checkUserStatus();
  }, []);

  const loginUser = async (userInfo) => {
    setLoading(true);
    try {
        let response = await account.createEmailPasswordSession(
            userInfo.email,
            userInfo.password
        );

        setUser(response); // Set user object on login
        return response;
    } catch (error) {
        console.error("loginUser error:", error);
        return { error: error.message };
    } finally {
        setLoading(false); // Ensures loading state is reset after the operation
    }
};


  const logoutUser = async () => {
    await account.deleteSession("current");
    setUser(null); // Reset user to null on logout
  };

  const registerUser = async (userInfo) => {
    setLoading(true);
    try {
      let response = await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password1,
        userInfo.name
      );

      await account.createEmailPasswordSession(
        userInfo.email,
        userInfo.password1
      );
      setUser(response); // Set user object after successful registration
    } catch (error) {
      console.error("registerUser error: ", error);
    }
    setLoading(false);
  };

  const verifyUser = async () => {
    try {
      await account.createVerification("http://localhost:5173/verifyemail");
      alert("Verification link has been sent!");
    } catch (error) {
      console.error("Verification error: ", error);
    }
  };

  const sendPasswordRecovery = async (userEmail) => {
    try {
      await account.createRecovery(userEmail, "http://localhost:5173/changepassword");
    } catch (error) {
      console.error("Password recovery error: ", error);
    }
  };

  const checkUserStatus = async () => {
    try {
      let accountDetails = await account.get();
      setUser(accountDetails); // Set user if account details are retrieved
    } catch (error) {
      setUser(null); // No user if there's an error (e.g., not logged in)
    }
    setLoading(false);
  };

  const contextData = {
    user,
    loginUser,
    logoutUser,
    registerUser,
    checkUserStatus,
    verifyUser,
    sendPasswordRecovery,
  };

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? <p>Loading...</p> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;
