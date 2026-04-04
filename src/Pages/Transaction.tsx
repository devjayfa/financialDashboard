
import { useSelector } from 'react-redux';
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar'
import TransactionTable from '../components/TransactionTable'
import MobileTrasactionView from '../components/MobileTrasactionView';

export default function Transaction() {

   
  const selectedUserId = useSelector((state: any) => state.user.selectedUserId);
  const transactions = useSelector((state: any) => state.transaction.transactions);
  const userTransactions = transactions.filter((t: any) => t.userId === selectedUserId);
 
  return (


   
        <main className="w-full py-12 px-3 lg:px-6 flex flex-col justify-center  gap-5">
            <div className="block lg:flex gap-4 w-full">
              <div className="w-full lg:w-3/4">
                 <SearchBar />
               </div>

            <div className="w-1/4">
                {/* <DropDown /> */}
            </div>
             </div>
             <div className='hidden lg:block'>
             <TransactionTable
             data={userTransactions}
             headers={[ "Category", "Date", "Amount","Type"]}
             />
             </div>
             <div className='block lg:hidden '>
             <MobileTrasactionView/>
              <div className="   h-0.5 w-full bg-gray-300 rounded-full"/>
              <MobileTrasactionView/>
              <div className="   h-0.5 w-full bg-gray-300 rounded-full"/>
              <MobileTrasactionView/>
              <div className="  h-0.5 w-full bg-gray-300 rounded-full"/>
              <MobileTrasactionView/>
              <div className="  h-0.5 w-full bg-gray-300 rounded-full"/>
             <div/>
             </div>




           
           <div className='w-full flex flex-col justify-center items-center'>
            <Pagination/>
           </div>
          
        </main>
     
    
  )
}
