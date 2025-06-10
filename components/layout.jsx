import { Outlet } from "react-router-dom";
import TopBar from "./Topper";
export default function Layout() {
  return (
    <>
      <TopBar />
      <div>
        <Outlet />
      </div>
    </>
  );
}
