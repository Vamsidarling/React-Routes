export default function UserProfile({ user, logout }) {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <h2>Welcome, {user.name}</h2>
        <button onClick={logout} className="logout-btn">Logout</button>
      </div>
      <div className="profile-info">
        <p><strong>Email:</strong> {user.email}</p>
        {/* Add more user info as needed */}
      </div>
    </div>
  );
}
