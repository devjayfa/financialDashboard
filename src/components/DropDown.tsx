import { useState } from "react";

export default function DropDown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("All");

  const options = ["All", "Income", "Expense"];

  return (
    <div className="relative w-full">
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-2 bg-[#2A0134]/80 border-3 border-[#2A0134]/25 rounded-lg text-left  flex justify-between items-center"
      >
        <span className="text-sm text-white">{selected}</span>
        <span className="text-gray-400">▼</span>
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border rounded-lg shadow-md z-10">
          {options.map((item) => (
            <div
              key={item}
              onClick={() => {
                setSelected(item);
                setIsOpen(false);
              }}
              className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}