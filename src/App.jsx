import AppRoutess from "./Routess";
import AuthProvider from "../components/AuthContext";
import ProfileWrapper from "../components/profileWrapper";

function App() {
  return (
    <AuthProvider>
      <AppRoutess />
      <ProfileWrapper />
    </AuthProvider>
  );
}

export default App;
