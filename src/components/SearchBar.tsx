
interface SearchBarProps{
  onSearch:(value:string)=>void
}

export default function SearchBar({
  onSearch
}:SearchBarProps) {
  return (
  <div className=" block">
  <div className="flex w-full  overflow-hidden  bg-white rounded-full lg:rounded-xl border-2 border-[#2A0134]/30">
    
   
    <input
      type="text"
      placeholder="Search here"
      className="flex-1 px-4 py-2 lg:py-3 text-sm text-[#2A0134] focus:outline-none"
      onChange={(e) => onSearch(e.target.value)}
    />

 
    <div className="bg-white px-6 rounded-full lg:rounded-xl flex items-center justify-center">
      <svg
        className="w-4 h-4 text-[#2A0134]"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m1.35-5.15a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  </div>
</div>
  );
}