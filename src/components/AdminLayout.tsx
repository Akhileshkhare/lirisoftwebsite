import React, { ReactNode } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface AdminLayoutProps {
    children: ReactNode;
  }
  
  const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("adminToken"); // Check admin authentication

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div>
      {/* <header>Admin Header</header> */}
      <main>
        {children}
      </main>
      {/* <footer>Admin Footer</footer> */}
    </div>
  );
};

export default AdminLayout;
