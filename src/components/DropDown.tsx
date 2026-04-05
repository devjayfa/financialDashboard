

type DropDownItem = {
  label: string;
  image?: string;
  value: number;
};

interface DropDownProps {
  showLeftImage?: boolean;
  content?: DropDownItem[];
  activemenu?: (value: number) => void;
}

export default function DropDown(
  { 
  showLeftImage,
  content,
  activemenu
}: DropDownProps) {
 


  return (
    <div className="  relative ">
      
        <div className="absolute mt-2 w-full bg-white dark:bg-gray-900 border-[0.5px] border-gray-200 dark:border-gray-600 rounded-sm shadow-xl z-10 py-3 px-4">
          {content?.map((item) => (
            <>
            <div
              key={item.value}
              onClick={() => {
                activemenu?.(item.value);
              }}
              className="flex items-center  px-3 lg:px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              { showLeftImage && (
                <img
              src={item.image}
              className="w-6 h-6 rounded-full object-cover"
            />
              )

              }
             
            <span className={`${showLeftImage?"ml-3" : "ml-0"} text-gray-700 dark:text-gray-100 text-xs lg:text-sm`}>{item.label}</span>
            </div>
            <div className="border border-gray-100 dark:border-gray-600  "/>
            </>
          ))}
        </div>
    
    </div>
  );
}