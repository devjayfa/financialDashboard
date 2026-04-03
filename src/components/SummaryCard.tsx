import StatusButton from "./StatusButton";


interface SummaryCardProps{
    amount?: string;
    title?:string;
    feedback?: string;
    percentageOfIncreseDecrease?:string
    isIconshow?:boolean
    isPercentageShow?:boolean,
    icon?:string
    
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
  return (
    <div className="bg-[#2A0134]/12 lg:bg-white px-3 lg:px-4 py-2 lg:py-4 rounded-lg lg:rounded-md  lg:border shadow-lg lg:shadow-md border-[#2A0134]/30 lg:border-[#2A0134]/10 hover:shadow-lg hover:scale-[1.02] transition-all duration-300  lg:max-full">
      <div className="flex justify-between items-center"> 
        {   isIconshow &&(
        <div className="w-8 h-8 hidden lg:flex rounded-full bg-[#2A0134]/10  items-center justify-center">
          <span className="text-[#2A0134] text-xs font-bold">{icon}</span>
        </div>
        )}
        <h3 className="text-base lg:text-lg font-semibold text-[#2A0134] lg:text-[black]">
          {title}
        </h3>
      </div>  
      <h1 className="text-base lg:text-xl font-bold text-[#6a4472] lg:text-[black] mt-2 lg:mt-6">
       {" "}{amount}
      </h1>
      <div className="flex items-center justify-between gap-2 mt-1 lg:mt-3">  
        <span className="text-xs text-gray-600 lg:text-gray-500">
         {feedback}
        </span>
        {isPercentageShow && (
        
        <StatusButton 
        content={percentageOfIncreseDecrease}
        borderColor={percentageOfIncreseDecrease?.includes("-") ? "border-[#2A0134]/20 lg:border-red-500" : "border-[#2A0134]/30 lg:border-green-500"}
        bgColor={percentageOfIncreseDecrease?.includes("-") ? "bg-[#2A0134]/60 lg:bg-red-100" : "bg-[#2A0134]/60 lg:bg-green-100"}
        textColor={percentageOfIncreseDecrease?.includes("-") ? "text-white lg:text-red-700" : "text-white lg:text-green-700"}
        />
        )
        }
      </div>

    </div>
  );
}