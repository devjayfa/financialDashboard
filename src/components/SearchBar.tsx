


export default function SearchBar() {
  return (
  <div className="hidden md:block">
  <div className="flex w-full overflow-hidden  bg-white rounded-xl border-2 border-[#2A0134]/30">
    
   
    <input
      type="text"
      placeholder="Search here"
      className="flex-1 px-4 py-3 text-sm text-[#2A0134] focus:outline-none"
    />

 
    <div className="bg-[#2A0134] px-6 rounded-xl flex items-center justify-center">
      <svg
        className="w-4 h-4 text-white"
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