import {
  LineChart,
  Line,
 
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { day: "january", balance: 1200 },
  { day: "february", balance: 1400 },
  { day: "march", balance: 1300 },
  { day: "april", balance: 1700 },
  { day: "may", balance: 1600 },
  { day: "june", balance: 1900 },
  { day: "july", balance: 2100
   },
    { day: "August", balance: 2100
   },
    { day: "september", balance: 2100
   },
];

export default function BalanceTrend() {
  return (
    <div className="bg-white px-2 py-7 lg:p-5  rounded-md shadow-lg lg:shadow w-full h-50 lg:h-100">
      
      <h2 className="text-base text-[#2A0134] lg:text-[black] lg:text-lg font-semibold mb-4">
        Balance Trend
      </h2>

      <ResponsiveContainer width="100%" height="90%" >
        <LineChart data={data}>

          <CartesianGrid strokeDasharray="2 3" />
              {/* <YAxis  /> */}
          
           
          {/* <XAxis dataKey="day"  tick={{ fontSize: 10, color:"text-[#2A0134]" }} /> */}
          

          <Tooltip />

          <Line
            type="monotone"
            dataKey="balance"
            stroke="#762e88"
            strokeWidth={3}
            dot={{ r: 4 }}
          />

        </LineChart>
      </ResponsiveContainer>

    </div>
    
  );
}