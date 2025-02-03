import React from 'react'
import { ChevronRight } from "lucide-react";

function Breadcrumbs() {
  return (
    <div className='text-white flex justify-start gap-5 px-[130px] text-xl mt-12'>
        <span>Music</span>
        <span> <ChevronRight /> </span>
        <span> Genre </span>
        <span> <ChevronRight /> </span>
        <span className='text-[#47EC2E]'> Artists </span>
    </div>
  )
}

export default Breadcrumbs