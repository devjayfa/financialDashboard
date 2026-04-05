import { RiArrowLeftDownLongLine, RiArrowRightUpLongLine, RiDeleteBinLine, RiEditLine} from "react-icons/ri";

interface MobileTrasactionViewProps {
  data: any[];
  isAdmin?:boolean
}

export default function MobileTrasactionView({ data,isAdmin }: MobileTrasactionViewProps) {
  return (
    <div className="flex flex-col gap-2">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between p-4 bg-white w-full rounded-lg shadow-sm"
        >
          
          <div className="shrink-0">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-200 text-[#2A0134] text-lg text-bold">
              {
                item.type === "expense" ? (
                   <RiArrowRightUpLongLine/>
                ):(
                  <RiArrowLeftDownLongLine/>
                )
              }
            
            </div>
          </div>
          <div className="flex-1 mx-3">
            <p className="text-sm font-bold text-gray-800">
              {item.category}
            </p>
            <p className="text-xs text-gray-500">
              {item.date}
            </p>
          </div>
         
       <div className="text-right flex flex-col items-end gap-1">

            <p
             className={`text-sm font-bold ${
             item.type === "expense" ? "text-red-600" : "text-green-600"
            }`}
             >
             {item.type === "expense" ? "-" : "+"}$ {item.amount}
           </p>

           {isAdmin &&
          <div className="flex gap-2 text-gray-500 text-lg">

             <RiEditLine className="cursor-pointer"  />

             <RiDeleteBinLine className="cursor-pointer" />

          </div>
           }

       </div>

        </div>
      ))}
    </div>
  );
}