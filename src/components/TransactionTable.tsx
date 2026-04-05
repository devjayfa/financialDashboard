import StatusButton from "./StatusButton";

interface TransactionTableProps {
  data: any[];
  headers?: string[];
  isAdmin?:boolean;
}

export default function TransactionTable({ 
  data, 
  headers ,
  isAdmin
}: TransactionTableProps) {
 

  return (
   <div className="bg-gray-50 rounded-xl shadow overflow-hidden">

  <table className="w-full text-md border-collapse">

    
     <thead>
  <tr className="bg-gray-300 text-left text-[#2A0134]">
    
    {headers?.map((header, index) => (
      <th key={index} className="py-3 px-4">
        {header}
      </th>
    ))}

    {isAdmin && (
      <th className="py-3 px-4">Actions</th>
    )}

  </tr>
</thead>
    

    <tbody>
      {data.map((item, index) => (
        <tr
          key={index}
          className="border-t text-gray-500 border-gray-200 hover:bg-gray-50"
        >
         
          <td className="py-3 px-4">{item.category}</td>
          <td className="py-3 px-4">{item.date}</td>

          <td className={`py-3 px-4  text-gfray-500 `}>
            ${" "}{item.amount}
          </td>

          <td className="py-3 px-4">
           <StatusButton 
           content={item.type} 
           textSize="text-sm"
            bgColor={item.type === "income" ? "bg-green-100  " : "bg-red-100"}
            borderColor={item.type === "income" ? "border-green-500" : "border-red-500"}
            textColor={item.type === "income" ? "text-green-700" : "text-red-700"}
            rounded="rounded-md"
             />
          </td>
          {isAdmin &&
          <td className="py-3 px-4 flex gap-2">
  <button className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-md">
    Edit
  </button>

  <button className="px-3 py-1 text-xs bg-red-100 text-red-700 rounded-md">
    Delete
  </button>
</td>
}
        </tr>
      ))}
    </tbody>

  </table>

</div>
  );
}