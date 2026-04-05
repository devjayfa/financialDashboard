

export default function Message() {
  return (
    <div className="bg-red-800 text-white p-4 sm:p-6 rounded-2xl shadow-lg">

 
  <div className="flex items-start sm:items-center justify-between mb-3 gap-2">
    
    <div className="flex items-center gap-2">
     
      <h2 className="text-sm sm:text-lg font-semibold leading-tight">
        Smart Insight
      </h2>
    </div>

    <span className="bg-white/20 px-2 py-1 rounded-full text-[10px] sm:text-xs whitespace-nowrap">
      Moderate Risk
    </span>
  </div>

  
  <p className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
    Spending ↑ <span className="font-bold">18%</span> this month,
    mainly <span className="font-bold">Food & Drinks</span>.
  </p>

  
  <p className="hidden sm:block text-xs text-white/80">
     Try reducing food expenses or set a weekly budget to save more.
  </p>

</div>
      
  )
}
