import { ReactNode } from "react";
import { BottomNav } from "../components";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      {children}
      <div style={{ marginTop: "128px" }} />
      <BottomNav />
    </>
  );
};

export default MainLayout;
