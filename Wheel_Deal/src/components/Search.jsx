import React from 'react'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/select"
  import { Separator } from "@/components/separator"
  import { CiSearch } from "react-icons/ci";
import Data from '@/Shared/Data';


  

const Search = () => {
  return (
    <div className='p-2 bg-white rounded-md md:rounded-full flex-col md:flex md:flex-row gap-10 px-5 items-center w-full w-[60%] md:p-5'>
        <Select>
  <SelectTrigger className="w-full outline-none md:border-none  shadow-none">
    <SelectValue placeholder="Cars" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light">New</SelectItem>
    <SelectItem value="dark">Used</SelectItem>
    
  </SelectContent>
</Select>
<Separator orientation="vertical hidden md:block"/>




<Select>
  <SelectTrigger className="w-full outline-none md:border-none  shadow-none">
    <SelectValue placeholder="Brand" />
  </SelectTrigger>
  <SelectContent>

    {Data.CarMakes.map((maker,index)=>
    (
      <SelectItem value={maker.name}>{maker.name}</SelectItem>

    ))}
    
    
  </SelectContent>
</Select>

<Separator orientation = "vertical hiddden md:block" />



<Select>
  <SelectTrigger className="w-full outline-none md:border-none  shadow-none">
    <SelectValue placeholder="Pricing" />
  </SelectTrigger>
  <SelectContent>
    {Data.Pricing.map((Price,index)=>
    (<SelectItem value={Price.amount}>{Price.amount}</SelectItem>


    ))}
    
  </SelectContent>
</Select>
<div>
<CiSearch className='text-[50px] bg-primary rounded-full p-3  text-white hover:scale-105 transition-all cursor-pointer'/>
</div>

      
    </div>
  )
}

export default Search
