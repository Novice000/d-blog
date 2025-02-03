import React from 'react'
import Image from 'next/image';
import { Inter } from 'next/font/google'

const inter = Inter({ weight: ['400'], subsets: ['latin'] })

export type ArtistType = {
  name: string,
  position: string,
  image: string,
  description: string
}

function ArtistCard({ artist }: { artist: ArtistType }) {
  return (
    <div className="h-[400px] w-full bg-black text-white flex flex-col gap-2 p-4">
      <Image
        src={artist.image}
        alt={artist.name}
        className="h-[250px] w-full object-cover"
        width={200}
        height={300}
      />
      <h3 className=" text-3xl">{artist.name}</h3>
      <h2 className="text-xl">{artist.position}</h2>
      <p className={`${inter.className} text-sm`}>{artist.description}</p>
    </div>
  );
}

export default ArtistCard;
