
import DropDown from '../components/DropDown'
import Pagination from '../components/Pagination'
import SearchBar from '../components/SearchBar'
import TransactionTable from '../components/TransactionTable'

export default function Transaction() {
  return (


   
        <main className="w-full py-12 px-6 flex flex-col justify-center  gap-5">
            <div className="flex gap-4 w-full">
              <div className="w-3/4">
                 <SearchBar />
               </div>

            <div className="w-1/4">
                <DropDown />
            </div>
             </div>
           <TransactionTable/>
           <div className='w-full flex flex-col justify-center items-center'>
            <Pagination/>
           </div>
          
        </main>
     
    
  )
}
