import { useState } from "react";
import UserFinancialDashboard from "./Pages/UserFinancialDashboard";
import Transaction from "./Pages/Transaction";
import Insights from "./Pages/Insights";
import Sidebar from "./components/Sidebar";
import HeaderBar from "./components/Header";


const MainLayout = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "transactions", label: "Transactions" },
    { id: "insights", label: "Insights"},
  ];

  
  const renderPage = () => {
    switch (activeMenu) {
      case "dashboard":
        return <UserFinancialDashboard />;
      case "transactions":
        return <Transaction />;
      case "insights":
        return <Insights />;
      default:
        return <UserFinancialDashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar
        menuItems={menuItems}
        activeMenu={activeMenu}
        onMenuClick={(id) => setActiveMenu(id)}
      />
      <div className="flex-1 bg-gray-200 min-h-screen">
        <HeaderBar />
       
          {renderPage()}
       
      </div>
    </div>
  );
};

export default MainLayout;