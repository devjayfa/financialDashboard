import { useState } from "react";
import UserFinancialDashboard from "./Pages/UserFinancialDashboard";
import Transaction from "./Pages/Transaction";
import Insights from "./Pages/Insights";
import Sidebar from "./components/Sidebar";
import HeaderBar from "./components/Header";
import { useSelector } from "react-redux";
import "./index.css";


const MainLayout = () => {

   const users = useSelector((state: any) => state.user.users);
  const selectedUserId = useSelector((state: any) => state.user.selectedUserId);
  const selectedUser = users.find((u: any) => u.id === selectedUserId);
  const [activeMenu, setActiveMenu] = useState("dashboard");

  const menuItems = [
    { id: "dashboard", label: "Dashboard" },
    { id: "transactions", label: "Transactions" },
    { id: "insights", label: "Insights"},
  ];

  
  const renderPage = () => {
    if(selectedUser.role !== "admin"){
    switch (activeMenu) {
      case "dashboard":
        return <UserFinancialDashboard />;
      case "transactions":
        return <Transaction />;
      case "insights":
        return <Insights />;
      default:
        return <UserFinancialDashboard />;
    }}
    else{
      return <Transaction/>
    }
  };

  return (
   <div>
  <div className="hidden lg:block">
    <Sidebar
      menuItems={menuItems}
      activeMenu={activeMenu}
      onMenuClick={(id) => setActiveMenu(id)}
    />
  </div>
  <div className="lg:ml-64  min-h-screen bg-gray-50 lg:bg-gray-200 "> 
    <div className="w-full">
      <HeaderBar
        selectedUser={selectedUser}
        users={users}
        menuItems={menuItems}
        activeMenu={activeMenu}
        onMenuClick={(id) => setActiveMenu(id)}
      />
    </div>
    {renderPage()}
  </div>
</div>
  );
};

export default MainLayout;