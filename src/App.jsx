import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";
import AuthProvider from "./components/AuthContext";
import ProfileWrapper from "./components/profileWrapper";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <AppRoutes />
        <ProfileWrapper />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
