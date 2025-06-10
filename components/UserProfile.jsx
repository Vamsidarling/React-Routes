export default function UserProfile({ user,setUser, logout }) {
  function logout()
  {
    setUser(null);
  }
  return (

    <div className="profile-container">
      <h2>Welcome, {user.name}</h2>
      <p>Email: {user.email}</p>
      {/* Add more user info as needed */}
      <button onClick={logout}>Logout</button>
    </div>
  );
}
