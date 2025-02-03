import React from "react";
import halfFilled from "@/assets/vector.svg";
import Image from "next/image";


export default function Header() {
    return (
      <div className="bg-[#041C00] text-white flex items-center justify-between px-4 py-2 w-full px-4 md:px-[120px] py-7">
        <div>
          <h1 className="text-5xl font-bold">D{"'"} BLOG</h1>
        </div>
        <nav>
          <ul className="flex gap-6 font-bold list-none text-lg">
            <li>
              <Image src={halfFilled} alt="half-filled" />
            </li>
            <li>Artists</li>
            <li className="relative">
              Genres
              <div className="text-[8px] absolute top-1 -right-2 bg-[#47EC2E] text-black rounded-[50%] size-[10px] grid place-content-center font-bold">
                5
              </div>
            </li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
    );
}