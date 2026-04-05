import StatusButton from "./StatusButton";


interface SummaryCardProps{
    amount?: string;
    title?:string;
    feedback?: string;
    percentageOfIncreseDecrease?:string
    isIconshow?:boolean
    isPercentageShow?:boolean,
    icon?: React.ElementType;
    
}
 
export default function SummaryCard(
{
amount,
title,
feedback,
percentageOfIncreseDecrease,
 isIconshow=true,
isPercentageShow=true,
icon


}: SummaryCardProps) {
  const Icon = icon;
  return (
    <div className="bg-white lg:bg-white  px-3 lg:px-4 py-2 lg:py-4 rounded-lg lg:rounded-md  lg:border shadow-xl lg:shadow-md  lg:border-[#2A0134]/10 hover:shadow-lg hover:scale-[1.02] transition-all duration-300  lg:max-full">
      <div className="flex justify-between items-center"> 
      {isIconshow && Icon && (
  <div className="w-12 h-12 hidden lg:flex rounded-lg bg-[#2A0134]/10 dark:bg-gray-200 items-center justify-center">
    <span className="text-[#2A0134] text-3xl font-bold">
      <Icon />
    </span>
  </div>
)}
        <h3 className="text-base lg:text-lg font-semibold text-[#2A0134] lg:text-[black] lg:dark:text-white">
          {title}
        </h3>
      </div>  
      <h1 className="text-base lg:text-xl font-bold text-[#6a4472] lg:text-[black] lg:dark:text-gray-200 mt-2 lg:mt-6">
       {" "}{amount}
      </h1>
      <div className="flex items-center justify-between gap-2 mt-1 lg:mt-3">  
        <span className="text-xs text-gray-600 lg:text-gray-500 lg:dark:text-gray-200">
         {feedback}
        </span>
        {isPercentageShow && (
        
        <StatusButton 
        content={percentageOfIncreseDecrease}
        borderColor={percentageOfIncreseDecrease?.includes("-") ? "border-red-500" : "border-green-500"}
        bgColor={percentageOfIncreseDecrease?.includes("-") ? "bg-red-100" : "bg-green-100"}
        textColor={percentageOfIncreseDecrease?.includes("-") ? "text-red-700" : "text-green-700"}
        />
        )
        }
      </div>

    </div>
  );
}