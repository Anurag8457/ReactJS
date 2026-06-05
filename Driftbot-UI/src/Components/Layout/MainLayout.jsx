import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";



export default function MainLayout() {
  return (
    <div style={{ display: "flex" }} >
      <Sidebar />

      <div
        style={{
          marginLeft: `${drawerWidth}px`,
          width: `calc(100% - ${drawerWidth}px)`,
        }}
      >
        <Header />

        <main style={{ padding: "24px" }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}

