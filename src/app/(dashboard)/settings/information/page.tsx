import React from 'react'
import { IoPencil } from "react-icons/io5";

const Page = () => {
  return (
    <div className='w-full h-full'>
      <div className='w-full h-auto p-12 flex items-center justify-center'>
        <div className='relative rounded-full h-44 w-44 bg-gray-200 border shadow flex items-center justify-center'>
            <img src="" alt="" className='w-[95%] h-[95%] bg-white rounded-full' />
            <span className='absolute border h-8 w-8 bottom-4 right-0 bg-white'></span>
        </div>
      </div>
    </div>
  )
}

export default Page