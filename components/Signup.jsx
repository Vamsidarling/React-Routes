import { useState } from "react";
import axios from "axios";
import { useAuth } from "./AuthContext";
import "./Topper.css";
export default function Signup() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    // handle form submission logic here
    try {
      const res = await axios.post("http://localhost:3000/user/signup", {
        name,
        email,
        password,
        fname,
        lname,
      });
      console.log(res.data);
       const { setUser } = useAuth();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  }

  return (
    <div className="signup-form-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="naEnter use nameme"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="naEnter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="naEnter lastname nameme"
          value={lname}
          onChange={(e) => setLname(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="naEnter first nameme"
          value={fname}
          onChange={(e) => setFname(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
