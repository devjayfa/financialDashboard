
import ProgressBar from "../components/ProgressBar";
import SummaryCard from "../components/SummaryCard";
import BalanceTrend from "../components/Charts/BalanceTrend";
import { useSelector } from "react-redux";

export default function UserFinancialDashboard() {

  const selectedUserId = useSelector((state: any) => state.user.selectedUserId);
  const transactions = useSelector((state: any) => state.transaction.transactions);
  const userTransactions = transactions.filter((t: any) => t.userId === selectedUserId);

  let income = 0;
  let expense = 0;

  const latestDate = new Date(
  Math.max(...userTransactions.map((t: any) => new Date(t.date).getTime()))
);

const currentMonth = latestDate.getMonth();
const currentYear = latestDate.getFullYear();

const lastMonthDate = new Date(latestDate);
lastMonthDate.setMonth(currentMonth - 1);

const lastMonth = lastMonthDate.getMonth();
const lastYear = lastMonthDate.getFullYear();

   let currentIncome = 0;
   let currentExpense = 0;

   let lastIncome = 0;
   let lastExpense = 0;
  

 userTransactions.forEach((t: any) => {
  const date = new Date(t.date);

  const isCurrent =
    date.getMonth() === currentMonth &&
    date.getFullYear() === currentYear;

  const isLast =
    date.getMonth() === lastMonth &&
    date.getFullYear() === lastYear;

  if (t.type === "income") {
    if (isCurrent) currentIncome += t.amount;
    if (isLast) lastIncome += t.amount;
    income += t.amount;
  } else {
    if (isCurrent) currentExpense += t.amount;
    if (isLast) lastExpense += t.amount;
    expense += t.amount;
  }
});
const totalbalance = income-expense;
 const balance =totalbalance;
const lastBalance = balance-currentIncome+currentExpense;
const calculatePercentage = (current: number, last: number) => {
  if (last === 0) return current > 0 ? 100 : 0;
  return ((current - last) / Math.abs(last)) * 100;
};
const calculateExpensePercentage = (current: number, last: number) => {
  if (last === 0) return current > 0 ? 100 : 0;
  return (((current/balance)*100 - (last/lastBalance)*100)) ;
};

const incomePercentage = calculatePercentage(currentIncome, lastIncome);
const expensePercentage = calculateExpensePercentage(currentExpense, lastExpense);
const balancePercentage = calculatePercentage(balance, lastBalance);

const getFeedback = (value: number) => {
  return value >= 0
    ? "Increase than last month"
    : "Decrease than last month";
};
   
       const Cards = [
  {
    Icon: "Rs",
    title: "Balance",
    amount: `$${totalbalance.toFixed(2)}`,
    feedback: getFeedback(balancePercentage),
    percentage: `${balancePercentage.toFixed(1)}%`,
  },
  {
    Icon: "Rs",
    title: "Income",
    amount: `$${currentIncome.toFixed(2)}`,
    feedback: getFeedback(incomePercentage),
    percentage: `${incomePercentage.toFixed(1)}%`,
  },
  {
    Icon: "Rs",
    title: "Expense",
    amount: `$${currentExpense.toFixed(2)}`,
    feedback: getFeedback(expensePercentage),
    percentage: `${expensePercentage.toFixed(1)}%`,
  },
];
     

  const currentMonthExpenses = userTransactions.filter((t: any) => {
  const date = new Date(t.date);

  return (
    t.type === "expense" &&
    date.getMonth() === currentMonth&&
    date.getFullYear() === currentYear
  );
});

const categoryMap: Record<string, number> = {};

currentMonthExpenses.forEach((t:any) => {
  if (!categoryMap[t.category]) {
    categoryMap[t.category] = 0;
  }

  categoryMap[t.category] += t.amount;
});
const totalExpense = currentMonthExpenses.reduce(
  (sum:any, t:any) => sum + t.amount,
  0
);

const progressBar = Object.keys(categoryMap).map((category) => {
  const amount = categoryMap[category];

  const percent = totalExpense ? (amount / totalExpense) * 100 : 0;

  return {
    caption: category,
    percentage: `${percent.toFixed(1)}%`,
    width: percent,
  };
});

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
        <div className="bg-white p-5 rounded-md shadow-lg lg:shadow space-y-4">
          <h2 className="text-base lg:text-lg text-[#2A0134] lg:text-[black] font-semibold mb-2">
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