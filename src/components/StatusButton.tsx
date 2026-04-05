interface StatusButtonProps{
    content?:string
    Xpadding?:string;
    Ypadding?:string,
    bgColor?:string,
    borderColor?:string,
    textSize?:string,
    textColor?:string,
    rounded?:string
}

export default function StatusButton({ 
    content,
    Xpadding,
    Ypadding,
    bgColor,
    borderColor,
    textSize,
    textColor,
    rounded
}:StatusButtonProps) {
  return (
    
    <span className={`${textSize || 'text-xs'} font-semibold ${bgColor || 'bg-green-100'} ${borderColor ? `border border-${borderColor}` : 'border border-green-600'} 
    ${Ypadding || 'py-1'} ${Xpadding || 'px-2'} ${rounded || 'rounded-xl'} ${textColor || 'text-green-800'} ` }>
          {content}
        </span>
  )
}
