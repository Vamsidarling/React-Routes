import useAuth from "./AuthContext";
import Signup from ".//Signup";
import Signin from ".//Signin";
import UserProfile from ".//UserProfile";
export default function profileWrapper() {
  

  const { user, logout } = useAuth();
  //   function logout() {
  //   setUser(null);
  // }
  return (
    <>
      {!user ? (
        <>
          <Signup />
          <Signin />
        </>
      ) : (
        <UserProfile user={user} onLogout={logout} />
      )}
    </>
  );
}
