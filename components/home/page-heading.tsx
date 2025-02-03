import React from 'react'
import { Button } from '../ui/button';

function Bar() {
  return (
    <div className="flex justify-between items-center text-white px-[130px] mt-20">
      <h1 className="text-6xl font-bold">ARTISTS</h1>
      <div className="display flex gap-6">
        <Button className="bg-[#0F3809] text-white rounded-md px-4 py-1">
          SINGER
        </Button>
        <Button className="border border-[#0F3809] text-white rounded-md px-4 py-1 mr-4 hover:bg-[#0F3809]">
          INSTRUMENTALIST
        </Button>
      </div>
    </div>
  );
}

export default Bar