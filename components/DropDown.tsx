import Image from 'next/image'
import React, { FC } from 'react'
type Props = {
    img:string,
    className?:string
}
const DropDown:FC<Props> = ({img,className}) => {
  return (
    <ul className={`absolute h-[80vh] w-lvw left-0 pt-10 transition-all duration-150 hidden group-hover:block ${className}`}>
    <div className="container bg-gray-600 h-full rounded-lg">
      <div className="grid grid-cols-6 p-10 gap-6 overflow-hidden ">
        {Array.from(Array(18)).map((_, i) => (
          <div
            key={i}
            className="text-black border rounded-lg overflow-hidden relative w-full aspect-video h-36  hover:-translate-y-1 transition-all duration-150"
          >
            <Image
              src={img}
              alt=""
              fill
    
            />
          </div>
        ))}
      </div>
    </div>
  </ul>
  )
}

export default DropDown