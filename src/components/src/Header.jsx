import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Logo1 from './Logo1.png'

export default function Header() {
    const [toggle, setToggle] = useState(false);
  return (
    <div className=' absolute  z-10'>
      <div className='max-w-[1240px]  items-center flex justify-between mx-auto'>
        <div className='top-[-15px] left-[5px]  w-[720px]  object-cover'>
            <img src={Logo1} alt="" className='w-[20vw] h-[40vh]' />
        </div>
        {
            toggle ?
            <AiOutlineClose onClick={() => setToggle(!toggle)}  className='text-white text-2xl md:hidden block'/>
            :
            <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-white text-2xl md:hidden block'/>
            
        }
        <ul className='hidden md:flex mt-0 text-white gap-10'>
            <li>
                About Us
            </li>   
            <li>
                Blog
            </li>
            <li>
                Shop
            </li>
            <li>
                The Team
            </li>
            <li>
                Contact Us
            </li>
        </ul>
        {/* Responsive menu  */}
        <ul className={` duration-300 md:hidden h-screen  text-white w-full fixed bg-black top-[92px] 
               ${toggle ? 'left-[0]' : 'left-[-100%]'} 
               `}>
            <li className='p-5'>
                home
            </li >   
            <li className='p-5'>
                home
            </li>
            <li className='p-5'>
                home
            </li>
            <li className='p-5'>
                home
            </li>
            <li className='p-5'>
                home
            </li>
        </ul>

      </div>
    </div>
  )
}
