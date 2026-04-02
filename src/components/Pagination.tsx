import { useState } from "react";

export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);

  const pages = [1, 2, 3, 4, 5];

  return (
    <div className="flex items-center justify-between mt-6 ">
   
      <div className="flex flex-col items-center mt-6 gap-3">
  
  <p className="text-sm text-gray-500">
    Showing 1 to 10 of 50 results
  </p>

  <div className="flex items-center gap-2">
    <button className="px-6 py-1 border-2 border-[#2A0134]/25 bg-[#2A0134]/10 rounded-md text-sm hover:bg-gray-100">
      Prev
    </button>

    {[1,2,3].map((page) => (
      <button
        key={page}
        className="px-3 py-1 rounded-md text-sm border border-[#2A0134]/25 hover:bg-gray-100"
      >
        {page}
      </button>
    ))}

    <button className="px-6 py-1 border-2 border-[#2A0134]/20 bg-[#2A0134]/10 rounded-md text-sm hover:bg-gray-100">
      Next
    </button>
  </div>
</div>
    </div>
  );
}