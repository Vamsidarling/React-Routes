import "./Topper.css";
import { Link } from "react-router-dom";
export default function TopBar() {
  function Submit() {
    <h1>this is Sgninpage </h1>;
  }
  return (
    <>
      <header className="header">
        <span>SOCUAL MEDIA POST GENERATOR</span>
        <div className="btnstyle">
          <Link to="/Signin">
            <button onClick={Submit}> Signin </button>
          </Link>
          
          <Link to="/Signup">
            <button onClick={Submit}> Signup</button>
          </Link>
        </div>
      </header>
    </>
  );
}
