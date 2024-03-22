import React from 'react'
import { IoMdHome } from 'react-icons/io'
import { IoSearch } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function InicioBuscarComponent() {
  return (
    <div className="bg-neutral-900 flex text-md  px-6 gap-7 flex-col items-start justify-center rounded-md h-40">
                <Link to={'/songfy'} className='w-[90%]'>
                <button className="flex hover:text-white duration-500 items-center gap-5 w-[90%]">
                  <IoMdHome className="text-2xl" />
                  <h1>Início</h1>
                </button></Link>
                <button className="flex hover:text-white duration-500 items-center gap-5 w-[90%]">
                  <IoSearch className="text-2xl" />
                  <h1>Buscar</h1>
                </button>
              </div>
  )
}

export default InicioBuscarComponent
