
import { useSelector } from 'react-redux';
import DropDown from '../components/DropDown'
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar'
import TransactionTable from '../components/TransactionTable'

export default function Transaction() {

   
  const selectedUserId = useSelector((state: any) => state.user.selectedUserId);
  const transactions = useSelector((state: any) => state.transaction.transactions);
  const userTransactions = transactions.filter((t: any) => t.userId === selectedUserId);
 
  return (


   
        <main className="w-full py-12 px-6 flex flex-col justify-center  gap-5">
            <div className="flex gap-4 w-full">
              <div className="w-3/4">
                 <SearchBar />
               </div>

            <div className="w-1/4">
                {/* <DropDown /> */}
            </div>
             </div>
           <TransactionTable
           data={userTransactions}
           headers={[ "Category", "Date", "Amount","Type"]}
           />
           <div className='w-full flex flex-col justify-center items-center'>
            <Pagination/>
           </div>
          
        </main>
     
    
  )
}
