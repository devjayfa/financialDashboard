
import { useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar'
import TransactionTable from '../components/TransactionTable'
import MobileTrasactionView from '../components/MobileTrasactionView';
import DropDown from '../components/DropDown';
import { useState } from "react";
export default function Transaction() {
  

   
  const selectedUserId = useSelector((state: any) => state.user.selectedUserId);
  const users = useSelector((state: any) => state.user.users);
  const selectedUser = users.find((u: any) => u.id === selectedUserId);
  const transactions = useSelector((state: any) => state.transaction.transactions);
 const isAdmin = selectedUser?.role === "admin";

const userTransactions = isAdmin
  ? transactions
  : transactions.filter((t: any) => t.userId === selectedUserId);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
const [selectedType, setSelectedType] = useState<string | null>(null);
const [selectedSort, setSelectedSort] = useState<string | null>(null);
const [showSortDropdown, setShowSortDropdown] = useState<boolean>(false);
const [showCatergoryDropdown, setShowCategoryDropdrown] = useState<boolean>(false);


  const Category = ["Food","Shopping","Bills","Education","Medical","Travel","Savings"];
  const Sort = ["Category", "Date","Amount","Type"]
 
  const handleSortclick = (value:number)=>{
    setSelectedSort(Sort[value]);
    setShowSortDropdown(false);
     
    }
    const handleCategoryclick = (value:number)=>{
             setSelectedCategory(Category[value]);
             setShowCategoryDropdrown(false);
    }
   
 const filteredTransactions = userTransactions.filter((t: any) => {
  const search = searchTerm.toLowerCase();

  const matchesSearch =
    t.category?.toLowerCase().includes(search) ||
    t.type?.toLowerCase().includes(search) ||
    t.amount?.toString().includes(search) ||
    t.date?.includes(search);

  const matchesCategory =
    selectedCategory !== null
      ? t.category === selectedCategory
      : true;

  const matchesType =
    selectedType !== null
      ? t.type.toLowerCase() === selectedType
      : true;

  return matchesSearch && matchesCategory && matchesType;
});

const handleReset = () => {
  setSelectedSort(null);
  setSelectedCategory(null);
  setSelectedType(null);
};

const sortedTransactions = [...filteredTransactions].sort((a: any, b: any) => {
  if (selectedSort === null) return 0;

  switch (selectedSort) {
    case "Category":
      return a.category.localeCompare(b.category);

    case "Date":
      return new Date(b.date).getTime() - new Date(a.date).getTime();

    case "Amount":
      return b.amount - a.amount;

    case "Type":
      return a.type.localeCompare(b.type);

    default:
      return 0;
  }
});
 
  return (

  <main className="w-full py-12 px-3 lg:px-6 flex flex-col justify-center  gap-5">
    <div className="flex flex-col gap-4 w-full items-center lg:flex-row lg:items-center">
 
     <div className="w-full lg:w-1/2">
    <SearchBar onSearch={(value: string) => setSearchTerm(value)} />
     </div> 
     <div className="flex w-full gap-2 lg:w-1/2">

    <div className="w-1/2 lg:w-1/2">
      <div
        className="cursor-pointer px-4 py-2 lg:py-3 rounded bg-white shadow text-center text-xs lg:text-sm"
        onClick={() => setShowSortDropdown(!showSortDropdown)}
      >
        {selectedSort || "Sort"}
      </div>

      {showSortDropdown && (
        <DropDown
          showLeftImage={false}
          activemenu={handleSortclick}
          content={Sort.map((cat, index) => ({
            label: cat,
            value: index,
          }))}
        />
      )}
    </div>
  
    <div className="w-1/2 lg:w-1/2">
      <div
        className="cursor-pointer px-4 py-2 lg:py-3 rounded bg-white shadow text-center text-xs lg:text-sm"
        onClick={() => setShowCategoryDropdrown(!showCatergoryDropdown)}
      >
        {selectedCategory || "Category"}
      </div>

      {showCatergoryDropdown && (
        <DropDown
          showLeftImage={false}
          activemenu={handleCategoryclick}
          content={Category.map((cat, index) => ({
            label: cat,
            value: index,
          }))}
        />
      )}
    </div> 
     </div>

     <div className="w-25 lg:w-50 justify-center items-center">
       <div
        className="flex cursor-pointer px-4 py-2 lg:py-3 rounded-lg bg-[#2A0134]/30 hover:bg-[#2A0134] hover:text-white justify-center items-center shadow text-sm lg:text-sm"
        onClick={handleReset}
         >
        Reset
       </div>
    </div>

    </div>
    <div className='hidden lg:block'>
        <TransactionTable
          data={sortedTransactions}
          headers={[ "Category", "Date", "Amount","Type"]}
          isAdmin={isAdmin}
           />
    </div>
    <div className='block lg:hidden '>
         <MobileTrasactionView
          data = {sortedTransactions}
          isAdmin={isAdmin}
           />        
    <div/>
    </div>
          
   </main>
     
    
  )
}
