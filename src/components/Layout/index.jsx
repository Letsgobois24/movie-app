import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Layout = ({children}) => {
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Overlay */}
      {isToggleSidebar && (
        <div onClick={() => setIsToggleSidebar(false)} className="fixed inset-0 bg-transparent z-10">
          <div className="w-full h-full bg-white opacity-30"></div>
        </div>
      )}

      {/* Sidebar */}
      <Sidebar
        isOpen={isToggleSidebar}
        onClickToggle={() => setIsToggleSidebar(!isToggleSidebar)}
      />

      {/* Content */}
      <div className="flex flex-col h-screen">
        <Header onClickToggle={() => setIsToggleSidebar(!isToggleSidebar)} />
        <main className="flex-1 p-6 bg-secondary overflow-auto">
            {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;