

type DropDownItem = {
  label: string;
  image?: string;
  value: number;
};

interface DropDownProps {
  showLeftImage?: boolean;
  content: DropDownItem[];
  activemenu: (value: number) => void;
}

export default function DropDown(
  { 
  showLeftImage,
  content,
  activemenu
}: DropDownProps) {
 
  

  // const options = ["Category", "Category1", "Category2"];

  return (
    <div className="relative w-full">
      
        <div className="absolute mt-2 w-full bg-white border-[0.5px] border-gray-200 rounded-sm shadow-xl z-10 py-3 px-4">
          {content.map((item) => (
            <>
            <div
              key={item.value}
              onClick={() => {
                activemenu?.(item.value);
              }}
              className="flex items-center  px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              { showLeftImage && (
                <img
              src={item.image}
              className="w-6 h-6 rounded-full object-cover"
            />
              )

              }
             
            <span className="ml-3 text-gray-700">{item.label}</span>
            </div>
            <div className="border border-gray-100 "/>
            </>
          ))}
        </div>
    
    </div>
  );
}