import React from 'react'

export default function EmailForm() {
  return (
    <div className='relative w-full bg-[#E0FAB5] py-16 px-4 text-center mx-auto font-bold'>
   <div className='flex flex-col md:text-4xl'>
     <div>You've scrolled this far.</div>
     <div>let's make it official.</div>
   </div>
     
     <div className='flex flex-col md:flex-row justify-center gap-[2vw] p-[5vh]'>

        
     <input
        type="email"
        name="email"
        placeholder='Email'
        className="border-solid border-2 border-green-700 shadow rounded w-[70vw] md:w-[20vw]  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button className='bg-[#00A25A] text-white w-[20vw] md:w-[10vw] p-[1%] md:p-[0] rounded-md font-medium '>Sign up</button>
     </div>
    </div>
  )
}
