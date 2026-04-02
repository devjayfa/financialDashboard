
import ProgressBar from "../components/ProgressBar";
import SummaryCard from "../components/SummaryCard";
import BalanceTrend from "../components/Charts/BalanceTrend";

export default function UserFinancialDashboard() {

    const Cards=[
        {
            Icon:"Rs",
            title:"Balance",
            amount:"$200000",
            feedback:"Increse than last month",
            percentage:"2.5%"
        },
         {
            Icon:"Rs",
            title:"Balance",
            amount:"$200000",
            feedback:"Increse than last month",
            percentage:"2.5%"
        },
         {
            Icon:"Rs",
            title:"Balance",
            amount:"$200000",
            feedback:"Increse than last month",
            percentage:"2.5%"
        },
        
    ]
    const progressBar = [
        {
            caption:"Food",
            percentage:"20%",
            width:12
        },
         {
            caption:"Food",
            percentage:"40%",
            width:12
        },
         {
            caption:"Food",
            percentage:"10%",
            width:12
        },
         {
            caption:"Food",
            percentage:"20%",
            width:12
        },
         {
            caption:"Food",
            percentage:"10%",
            width:12
        }
    ]

  return (
  
    <main className="py-9 px-5">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-start">
            {
              Cards.map((summaryCard,index)=>(
                <div key={index}>
                <SummaryCard   
                  icon={summaryCard.Icon}
                  title={summaryCard.title}
                  amount={summaryCard.amount}
                  feedback={summaryCard.feedback}
                  percentageOfIncreseDecrease={summaryCard.percentage}
                />
                </div>           
              ))
            }
          </div>
          <BalanceTrend />
        </div>
        <div className="bg-white p-5 rounded-md shadow space-y-4">
          <h2 className="text-lg font-semibold mb-2">
            Spending Breakdown
          </h2>
           {
              progressBar.map((bar,index)=>(
                <div key={index}>
                <ProgressBar  
                 caption={bar.caption}
                 percentage={bar.percentage}
                />
                </div>           
              ))
            }
        </div>
      </div>
    </main>
  
     
  );
}