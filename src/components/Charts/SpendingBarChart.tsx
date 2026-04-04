import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function SpendingBarChart() {

 

  const data = [
  { category: "Food", amount: 12000 },
  { category: "Shopping", amount: 8000 },
  { category: "Bills", amount: 5000 },
  { category: "Lifestyle", amount: 5000 },
   { category: "Medical", amount: 5000 },
    { category: "Entertainment", amount: 5000 },
     { category: "Travel", amount: 5000 },
      { category: "Savings", amount: 5000 }
];

  return (
    <div className="bg-white py-9 px-3 rounded-2xl shadow-md w-full h-[400px]">
      <h2 className="text-lg font-semibold mb-4 text-[#2A0134]">
        Monthly Spending by Category
      </h2>

  <ResponsiveContainer width="100%" height="100%">
  <BarChart data={data}>
    
    <CartesianGrid strokeDasharray="3 3" />

    <XAxis dataKey="category" tick={{ fontSize: 14 }} />
    <YAxis />

    {/* REMOVE LINE HERE */}
    <Tooltip cursor={false} formatter={(value) => `LKR ${value}`} />

    <Bar 
      dataKey="amount" 
      fill="#762e88" 
      radius={[8, 8, 0, 0]} 
      activeBar={false}
    />

  </BarChart>
</ResponsiveContainer>
    </div>
  );
}