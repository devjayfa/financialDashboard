


interface ProgressBarProps{
caption?:string,
percentage?:string,

}

export default function ProgressBar({
    caption,
   
    percentage
  
}:ProgressBarProps) {
  return (
    <div className="w-full">

  <div className="text-sm text-gray-800  mb-1 text-left">
    {caption}
  </div>

  <div className="flex items-center gap-4 w-full">
    <div className="flex-1 bg-gray-200 rounded-full h-4.5 lg:h-6 overflow-hidden">
      <div
        className={"h-full bg-[#2A0134]/40"}
        style={{ width: percentage}}
      />
    </div>
    <div className="w-12 text-right text-sm font-medium text-[#2A0134] lg:text-gray-600">
      {percentage}
    </div>
  </div>

</div>
  );
}