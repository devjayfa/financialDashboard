type InsightCardProps = {
  title: string;
  value: string;
  amount: string;
  color?: string;
  
};

export default function InsightCard({
  title,
  value,
  amount,
  color = "text-gray-800",
}: InsightCardProps) {
  return (
   
  <div className="bg-white px-4 py-3 lg:py-4 rounded-xl shadow-lg lg:shadow-md w-full flex flex-col gap-2">

  
  <div className="flex items-center gap-2">
   

    <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
      {title}
    </h3>
  </div>

  
  <p className={`text-sm lg:text-base font-semibold ${color}`}>
    {value}
  </p>

  
  <p className="text-sm text-gray-600">
    {amount}
  </p>

</div>
  );
}