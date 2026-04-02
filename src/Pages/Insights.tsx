

import SummaryCard from '../components/SummaryCard'


export default function Insights() {
    const insights=
        {
            icon:"",
            title:"Top Spending",
            value:"Food & Drinks",
            subtext:"12,500 this month",
            minibadge : "+18 from last month"
        }
       const month=  {
            icon:"",
            title:"Monthly Change",
            value:"-8.2%",
            subtext:"You spent less than last month",
            minibadge : "Overspending"
        }
       const trend=  {
            icon:"",
            title:"Spending Trend",
            value:"Increasing",
            subtext:"Your spending is rising steadily",
            minibadge : "+18 from last month"
        }
    
  return (


 

    <main className="w-full py-12 px-6 flex flex-col gap-6">
      
      {/* Page Title */}

       <div className="bg-red-800 to-purple-600 text-white p-6 rounded-2xl shadow-lg">

  {/* Header */}
  <div className="flex items-center justify-between mb-3">
    <div className="flex items-center gap-2">
      <span className="text-2xl">🧠</span>
      <h2 className="text-lg font-semibold">Smart Financial Insight</h2>
    </div>
    <span className="bg-white/20 px-3 py-1 rounded-full text-xs">
      Moderate Risk
    </span>
  </div>

  {/* Main Message */}
  <p className="text-sm leading-relaxed mb-3">
    Your spending increased by <span className="font-bold">18%</span> this month,
    mainly driven by <span className="font-bold">Food & Drinks</span>.
    This is higher than your usual pattern.
  </p>

  {/* Suggestion */}
  <p className="text-xs text-white/80">
    💡 Consider reducing daily food expenses or setting a weekly budget to improve your savings.
  </p>

</div>
     
      {/* Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
             <SummaryCard
               icon={insights.icon}
               title={insights.title}
               amount={insights.value}
               feedback={insights.subtext}
               percentageOfIncreseDecrease={insights.minibadge}
             />
         
                <SummaryCard
               icon={month.icon}
               title={month.title}
               amount={month.value}
               feedback={month.subtext}
               percentageOfIncreseDecrease={month.minibadge}
             />
               <SummaryCard
               icon={trend.icon}
               title={trend.title}
               amount={trend.value}
               feedback={trend.subtext}
               percentageOfIncreseDecrease={trend.minibadge}
             />   
              <SummaryCard
               icon={trend.icon}
               title={trend.title}
               amount={trend.value}
               feedback={trend.subtext}
               percentageOfIncreseDecrease={trend.minibadge}
             />   
              <SummaryCard
               icon={trend.icon}
               title={trend.title}
               amount={trend.value}
               feedback={trend.subtext}
               percentageOfIncreseDecrease={trend.minibadge}
             />   
      </div>
       
      
     
     

    </main>
  

    
  )
}
