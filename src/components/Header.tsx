

export default function HeaderBar() {
  return (
    <header className="bg-white border-b border-[#2A0134]/10 px-6 py-4 flex items-center justify-between">

    
      <div className="flex items-center gap-3">
        <div className="w-5 h-5">
            <img
            src="/icon.png"
           alt="Profile"
           className="w-5 h-5  object-cover"
            />
        </div>
        <h1 className="text-lg font-semibold text-[#2A0134]">
          Finance Dashboard
        </h1>
      </div>

     
      

     
      <div className="flex items-center gap-2">
  <div className="w-10 h-10 rounded-full">
    <img
      src="/admin.avif"
      alt="Profile"
      className="w-10 h-10 rounded-full object-cover"
    />
  </div>

  <div className="flex flex-col">
    <div className="flex items-center gap-1">
      <span className="text-md font-medium text-[#2A0134]">
        Richard Marcline
      </span>

     
      <svg
        className="w-4 h-4 text-[#2A0134] "
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </div>

    <span className="text-xs text-gray-500">
      @richardmarcline
    </span>
  </div>
</div>
    </header>
  );
}