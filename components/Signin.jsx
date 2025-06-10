import { useState } from "react";
import axios from "axios";
import "./sign.css";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/user/signin", {
        email,
        password,
      });
      console.log(response.data);
       const { setUser } = useAuth();
      // handle success (e.g., redirect or set user)
    } catch (error) {
      console.error("Error signing in:", error);
      // optionally show error to user
    }
  }

  return (
    <div className="signin-form-container">
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="signin-form-title">Sign In</div>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign in</button>
      </form>
    </div>
  );
}