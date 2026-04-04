import { useState } from "react";
import UserFinancialDashboard from "./Pages/UserFinancialDashboard";
import Transaction from "./Pages/Transaction";
import Insights from "./Pages/Insights";
import Sidebar from "./components/Sidebar";
import HeaderBar from "./components/Header";
import { useSelector } from "react-redux";


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
      <div className=" hidden lg:block" >
      <Sidebar
        menuItems={menuItems}
        activeMenu={activeMenu}
        onMenuClick={(id) => setActiveMenu(id)}
      />
      </div>
      <div className="w-full flex-1 bg-gray-50 lg:bg-gray-200 min-h-screen">
        <HeaderBar 
          selectedUser={selectedUser}
          users={users}
          menuItems={menuItems}
           activeMenu={activeMenu}
          onMenuClick={(id: string) => setActiveMenu(id)}

        />
       
          {renderPage()}
       
      </div>
    </div>
  );
};

export default MainLayout;