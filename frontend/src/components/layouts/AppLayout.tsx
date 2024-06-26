// AppLayout.tsx
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useUser } from "@clerk/clerk-react";

export function AppLayout() {
  const { isSignedIn } = useUser();

  return (
	<>
      <Header />
          <div className="container">
            <Outlet />
          </div>
      
	</>
  );
}
