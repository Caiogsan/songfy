import React from 'react'
import { FaPlay } from 'react-icons/fa6'

function PlayerButton({ style }: {style:string}) {
  return (
    <div className={`${style} text-lg text-black hover:cursor-pointer bottom-28 flex items-center justify-center bg-green-500 h-12 w-12 rounded-full right-6`}>
      <FaPlay />
    </div>
  )
}

export default PlayerButton
