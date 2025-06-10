import { BrowserRouter, Routes, Route } from "react-router-dom";

// Make sure to import or define these componentst";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Layout from "./components/layout";

export default function AppRoutess() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/Signin" element={<Signin />} />
            <Route path="/Signup" element={<Signup />} />
            {/* <Route path="*" element={<NotFound />} /> <br />
             <Link to = "/"> <button>Go to HOme </button>
             </Link> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
