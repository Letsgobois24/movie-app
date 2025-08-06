import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({ children }) => {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);

  return (
    <div className="relative h-screen md:flex">
      {/* Sidebar */}
        <Sidebar
          isOpen={isToggleSidebar}
          onClickToggle={() => setIsToggleSidebar(!isToggleSidebar)}
        />

      {/* Overlay */}
      {isToggleSidebar && (
        <div
          onClick={() => setIsToggleSidebar(false)}
          className="fixed inset-0 bg-black opacity-30 z-10 md:hidden"
        ></div>
      )}

      {/* Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header onClickToggle={() => setIsToggleSidebar(!isToggleSidebar)} />
        <main className="flex-1 bg-secondary overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
