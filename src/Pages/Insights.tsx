

import BalanceTrend from '../components/Charts/BalanceTrend'

import InsightCard from '../components/InsightCard'


export default function Insights() {
    // const insights=
    //     {
    //         icon:"",
    //         title:"Top Spending",
    //         value:"Food & Drinks",
    //         subtext:"12,500 this month",
    //         minibadge : "overspending"
    //     }
    //    const month=  {
    //         icon:"",
    //         title:"Monthly Change",
    //         value:"-8.2%",
    //         subtext:"You ",
    //         minibadge : "Overspending"
    //     }
    //    const trend=  {
    //         icon:"",
    //         title:"Spending Trend",
    //         value:"Increasing",
    //         subtext:"Your spend",
    //         minibadge : "overspending"
    //     }
    
  return (


 

    <main className="w-full py-12 px-3 flex flex-col gap-6">
      
      {/* Page Title */}

     <div className="bg-red-800 text-white p-4 sm:p-6 rounded-2xl shadow-lg">

  {/* Header */}
  <div className="flex items-start sm:items-center justify-between mb-3 gap-2">
    
    <div className="flex items-center gap-2">
      <span className="text-xl sm:text-2xl">🧠</span>
      <h2 className="text-sm sm:text-lg font-semibold leading-tight">
        Smart Insight
      </h2>
    </div>

    <span className="bg-white/20 px-2 py-1 rounded-full text-[10px] sm:text-xs whitespace-nowrap">
      Moderate Risk
    </span>
  </div>

  {/* Main Message (short on mobile) */}
  <p className="text-xs sm:text-sm leading-relaxed mb-2 sm:mb-3">
    Spending ↑ <span className="font-bold">18%</span> this month,
    mainly <span className="font-bold">Food & Drinks</span>.
  </p>

  {/* Suggestion (hidden on very small screens optional) */}
  <p className="hidden sm:block text-xs text-white/80">
    💡 Try reducing food expenses or set a weekly budget to save more.
  </p>

</div>
      
         
  <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 ">

  <div className="grid grid-cols-2 gap-4">
    
    <InsightCard
      title="Most"
      value="Shopping"
      amount="LKR 15,000"
      color="text-red-500"
    />

    <InsightCard
      title="Lowest "
      value="Bills"
      amount="LKR 5,000"
      color="text-green-500"
    />

    <InsightCard
      title="Average"
      value="All Categories"
      amount="LKR 10,666"
      color="text-blue-500"
    />
    <InsightCard
      title="Average"
      value="All Categories"
      amount="LKR 10,666"
      color="text-blue-500"
    />

  </div>
   <div className="md:col-span-2">
    <BalanceTrend />
  </div>

</div>
 <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 ">

  <div className="grid grid-cols-2 gap-4">
    
    <InsightCard
      title="Most"
      value="Shopping"
      amount="LKR 15,000"
      color="text-red-500"
    />

    <InsightCard
      title="Lowest "
      value="Bills"
      amount="LKR 5,000"
      color="text-green-500"
    />

  

  </div>
   <div className="md:col-span-2">
    <BalanceTrend />
  </div>

</div>
    
       
      
     
     

    </main>
  

    
  )
}
