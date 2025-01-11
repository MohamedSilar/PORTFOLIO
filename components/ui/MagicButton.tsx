import React from 'react'

const MagicButton = ({title,icon,position,handleClick,otherclasses} :{
    title:String; 
    icon:React.ReactNode; 
    position:String; 
    handleClick?: () => void;
    otherclasses?:String;
}) => {
  return (
      <button className="relative inline-flex h-12 overflow-hidden p-[1px] rounded-lg w-full md:w-60 md:mt-10" onClick={handleClick}>
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl rounded-lg gap-2 ${otherclasses}`}>
            {position === 'left' && icon}
          {title}
            {position === 'right' && icon}

        </span>
      </button>
  )
}

export default MagicButton
