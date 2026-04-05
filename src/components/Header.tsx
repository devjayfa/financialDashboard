
import { RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
import DropDown from "./DropDown";
import { useDispatch } from "react-redux";
import { setSelectedUser } from "../Slices/UserSlice";




interface HeaderBarProps {
  selectedUser: any;
  users: any;
  menuItems: any;
  activeMenu: string;
  onMenuClick: (id: string) => void;
}

export default function HeaderBar(
  { 
    selectedUser,
     users,
     menuItems,
     activeMenu,
     onMenuClick


   }: HeaderBarProps) {
 
   const dispatch = useDispatch();
  const [showDropdown,setShowDropDown] = useState(false);
  
  const handleClick =()=>{
    setShowDropDown(!showDropdown);
  }
  const handleUserclick = (value:number)=>{
        dispatch(setSelectedUser(value))
  }

    const activeMenuLabel =
  menuItems.find((item: any) => item.id === activeMenu)?.label || "";
  return (
    <header className="relative  bg-[#2A0134] lg:bg-white lg:dark:bg-gray-900 border-b dark:border-b-gray-800 border-[#2A0134]/10 px-6 py-12 lg:py-4 block lg:flex
     items-center justify-between shadow-lg rounded-none  lg:rounded-none  ">

    
      <div className=" items-center gap-3 hidden lg:flex">
        
        <h1 className="text-lg font-semibold text-white lg:text-black">
          {activeMenuLabel}
        </h1>
      </div>   
      <div className="flex items-center gap-2  ">
        
  <div className=" cursor-pointer w-10 h-10 rounded-full">
    <img
      src={selectedUser?.profile || "/admin.avif"}
      alt="Profile"
      className="w-10 h-10 rounded-full object-cover"
    />
  </div>

  <div className="flex flex-col">
    <div className="flex items-center gap-1">
      <span className="text-md font-medium text-white lg:text-black">
        {selectedUser?.username || "Admin"}
      </span>

     
    <RiArrowDownSLine
    onClick={handleClick}
    className="text-black cursor-pointer"
    />
    </div>

    <span className="text-xs text-gray-200 lg:text-gray-500">
      {selectedUser?.email || "admin@financedashboard.com"}
    </span>
  </div>
 {showDropdown && (
          <div className="absolute top-14 right-10 w-50 lg:w-56  shadow-xl z-50">
          <DropDown
            showLeftImage={true}
            activemenu={handleUserclick}
            content={users.map((user: any) => ({
             label: user.username,
             image: user.profile,
             value: user.id,
           }))}
          />
          </div>
 )}

</div>


<div className="lg:hidden absolute bottom-3 left-0 w-full flex justify-around">
  
  {selectedUser?.role !== "admin" &&
    menuItems?.map((item: any) => (
      <button
        key={item.id}
        onClick={() => onMenuClick(item.id)}
        className="flex flex-col items-center"
      >
        <span
          className={`text-sm font-geist ${
            activeMenu === item.id ? "text-purple-300" : "text-white"
          }`}
        >
          {item.label}
        </span>

        {activeMenu === item.id && (
          <div className="absolute mt-7 h-0.5 w-26 bg-purple-300 rounded-full"></div>
        )}
      </button>
    ))}
</div>
    </header>
  );
}