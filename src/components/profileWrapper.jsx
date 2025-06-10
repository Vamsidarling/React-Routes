import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function ProfileWrapper() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      {user ? (
        <div>
          <h2>Welcome, {user.name}</h2>
          {/* Add more profile content here */}
        </div>
      ) : (
        <div>Please log in to view your profile</div>
      )}
    </div>
  );
}

export default ProfileWrapper; 