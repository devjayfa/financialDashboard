export type SidebarItem = {
  id: string;
  label: string;
 
};

interface SidebarProps {
    menuItems?: SidebarItem[];
    activeMenu?: string;
    onMenuClick?: (id: string) => void;
    
}
export default function Sidebar({ 
    
    menuItems, 
    activeMenu,
     onMenuClick 
}: SidebarProps) {
  return (
    <div className="fixed h-screen w-64 bg-white border-r border-gray-200 p-5">

<div className="hidden lg:flex items-center gap-3 text-xl font-bold text-gray-800 mb-8">
         <img
          src="/logo.jpg"
          alt="Logo"
          className="w-15 h-15 rounded-full object-cover"
          />

          <span>Banaraz</span>
          </div>
      <nav className="flex lg:block space-y-2">
        {
           menuItems?.map((item,index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer ${
                activeMenu === item.id ? "bg-gray-300 " : "text-gray-600 hover:bg-gray-200"
              }`}
              onClick={() => onMenuClick?.(item.id)}
            >
              <span>{item.label}</span>
            </div>
          ))
        }
        
      </nav>
      <div className="absolute bottom-5 w-52 text-sm text-gray-500">
        © 2026 Finance App
      </div>
    </div>
  );
}