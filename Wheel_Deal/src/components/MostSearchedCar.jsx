import FakeData from '@/Shared/FakeData';
import React from 'react';
import CarItem from './CarItem';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const MostSearchedCar = () => {
  console.log(FakeData.carList); // Check if FakeData.carList is correctly logged

  return (
    <div   >

        <h2 className='font-bold text-3xl text-center my-16'>Most Searched Cars </h2>

       <div>
       <Carousel>
  <CarouselContent>
    
    
            {FakeData.carList.map((car,index)=>( 
                <CarouselItem className="basis-1/4"><CarItem car={car} key={index} /></CarouselItem>))}

        
  
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

       </div>
    


    
    </div>
  );
};

export default MostSearchedCar;
