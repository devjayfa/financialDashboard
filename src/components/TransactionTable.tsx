import StatusButton from "./StatusButton";

export default function TransactionTable() {
  const data = [
    { name: "Salary", category: "Income", date: "2026-04-01", amount: 2000, type: "income" },
    { name: "Grocery", category: "Food", date: "2026-04-02", amount: 120, type: "expense" },
    { name: "Uber", category: "Transport", date: "2026-04-02", amount: 25, type: "expense" },
    { name: "Uber", category: "Transport", date: "2026-04-02", amount: 25, type: "expense" },
    { name: "Uber", category: "Transport", date: "2026-04-02", amount: 25, type: "expense" },
  ];

  return (
   <div className="bg-gray-50 rounded-xl shadow overflow-hidden">

  <table className="w-full text-md border-collapse">

    <thead>
      <tr className="bg-gray-300 text-left text-[#2A0134]">
        <th className="py-3 px-4">Name</th>
        <th className="py-3 px-4">Category</th>
        <th className="py-3 px-4">Date</th>
        <th className="py-3 px-4">Amount</th>
        <th className="py-3 px-4">Type</th>
      </tr>
    </thead>

    <tbody>
      {data.map((item, index) => (
        <tr
          key={index}
          className="border-t text-gray-500 border-gray-200 hover:bg-gray-50"
        >
          <td className="py-3 px-4">{item.name}</td>
          <td className="py-3 px-4">{item.category}</td>
          <td className="py-3 px-4">{item.date}</td>

          <td className={`py-3 px-4 font-semibold text-[#2A0134] `}>
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
        </tr>
      ))}
    </tbody>

  </table>

</div>
  );
}