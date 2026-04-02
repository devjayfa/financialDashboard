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
    <div className="bg-white px-4 py-4 rounded-md border shadow-md border-[#2A0134]/10 hover:shadow-lg hover:scale-[1.02] transition-all duration-300 max-full ">
      <div className="flex justify-between items-center"> 
        {   isIconshow &&(
        <div className="w-8 h-8 rounded-full bg-[#2A0134]/10 flex items-center justify-center">
          <span className="text-[#2A0134] text-xs font-bold">{icon}</span>
        </div>
        )}
        <h3 className="text-lg font-semibold text-[black]">
          {title}
        </h3>
      </div>  
      <h1 className="text-xl font-bold text-[black] mt-6">
       {" "}{amount}
      </h1>
      <div className="flex items-center justify-between gap-2 mt-3">  
        <span className="text-xs text-gray-500">
         {feedback}
        </span>
        {isPercentageShow && (
        
        <StatusButton content={percentageOfIncreseDecrease}/>
        )
        }
      </div>

    </div>
  );
}