import { Separator } from '@radix-ui/react-select';
import React from 'react';
import { LuFuel } from "react-icons/lu";
import { SlSpeedometer } from "react-icons/sl";
import { GiGearStickPattern } from "react-icons/gi";
import { IoMdOpen } from "react-icons/io";

const CarItem = ({ car }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl max-w-sm mx-auto md:mx-0">
      {/* Car Image */}
      <h2 className='absolute m-2 bg-green-500 px-2 rounded-full text-sm pb-1'>New</h2>
      <img 
        src={car.image} 
        alt={car.name} 
        width={'100%'}
        height={250}
        className="rounded-t-xl  "
      />
      {/* Car Details */}
      <div className="p-4">
        <h2 className="font-bold text-gray-900 text-xl mb-3 text-center md:text-left">
          {car.name}
        </h2>
        <Separator className="h-[1px] bg-gray-300 mb-4" />
        <div className="grid grid-cols-3 gap-4 text-center">
          {/* Miles */}
          <div className="flex flex-col items-center text-gray-700">
            <LuFuel className="text-2xl mb-1 text-primary" />
            <h2 className="text-sm font-medium">{car.miles} miles</h2>
          </div>
          {/* Fuel Type */}
          <div className="flex flex-col items-center text-gray-700">
            <SlSpeedometer className="text-2xl mb-1 text-primary" />
            <h2 className="text-sm font-medium">{car.fuelType}</h2>
          </div>
          {/* Gear Type */}
          <div className="flex flex-col items-center text-gray-700">
            <GiGearStickPattern className="text-2xl mb-1 text-primary" />
            <h2 className="text-sm font-medium">{car.gearType}</h2>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-xl text-gray-900">${car.price}</h2>
          <button className="text-primary text-sm flex items-center gap-2 hover:underline">
            <IoMdOpen className="text-lg" />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarItem;
