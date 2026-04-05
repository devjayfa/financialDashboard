

import { useSelector } from 'react-redux';
import InsightCard from '../components/InsightCard'
import Message from '../components/Message';


export default function Insights() {

  const selectedUserId = useSelector((state: any) => state.user.selectedUserId);
  const transactions = useSelector((state: any) => state.transaction.transactions);
  const userTransactions = transactions.filter((t: any) => t.userId === selectedUserId);
 

const incomeData = new Array(12).fill(0);
const expenseData = new Array(12).fill(0);

userTransactions.forEach((t: any) => {
  const date = new Date(t.date);
  const monthIndex = date.getMonth();

  if (t.type === "income") {
    incomeData[monthIndex] += t.amount;
  } else {
    expenseData[monthIndex] += t.amount;
  }
});
  return (


 

    <main className="w-full py-12 px-3 lg:px-5 flex flex-col gap-6 ">
     <Message/>     
  <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 ">
    <InsightCard
      title="Most"
      value="Shopping"
      amount="$ 1,000"
      color="text-red-500"
    />

    <InsightCard
      title="Lowest "
      value="Bills"
      amount="$ 5,000"
      color="text-green-500"
    />

    <InsightCard
      title="Average"
      value="All Categories"
      amount="$ 10,666"
      color="text-blue-500"
    />
    <InsightCard
      title="Total"
      value="All Categories"
      amount="$ 109,666"
      color="text-blue-500"
    /> 

</div>
    </main>
  

    
  )
}
