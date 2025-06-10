import { useAuth } from "./AuthContext";
import Signup from "./Signup";
import Signin from "./Signin";
import UserProfile from "./UserProfile";
import "./auth.css";

export default function ProfileWrapper() {
  const { user, logout } = useAuth();

  return (
    <div className="auth-container">
      {!user ? (
        <div className="auth-buttons">
          <Signup />
          <Signin />
        </div>
      ) : (
        <UserProfile user={user} logout={logout} />
      )}
    </div>
  );
}
