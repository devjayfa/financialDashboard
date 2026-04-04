

export default function MobileTrasactionView() {
  return (
    <div className="flex items-center justify-between p-4 bg-white w-full">

  <div className="shrink-0">
    <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-200">
      💸
    </div>
  </div>

  
  <div className="flex-1 mx-3">
    <p className="text-sm font-bold text-gray-800">
      Food & Drinks
    </p>
    <p className="text-xs text-gray-500">
      02 Apr 2026
    </p>
  </div>

  
  <div className="text-right">
    <p className="text-sm font-bold text-red-600">
      - LKR 1,200
    </p>
  </div>

</div>
  )
}
