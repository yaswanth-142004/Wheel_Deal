import Header from '@/components/Header'
import React from 'react'
import car_details from '../Shared/car_details.json';
import InputField from './components/InputField';
import Dropdown from './components/Dropdown';
import TextArea from './components/TextArea';
import { Separator } from '@radix-ui/react-select';
import features from '../Shared/features.json';
import { Checkbox } from "@/components/ui/checkbox"


const AddListing = () => {
  return (
    <div>

        <Header/>

        <div className='px-10 md:px-20 my-10'>
            <h2 className='font-bold text-4xl'>Add New Listing</h2>

            <form className = "p-10 border rounded-xl mt-10 "action="">

                {/* Car Details */}
                <h2 className='font-medium text-xl mb-6'>Car Details</h2>
                <div className='md:grid grid-cols-2 gap-5 grid grid-cols-1'>
                    {car_details.carDetails.map((item,index)=>(
                        <div key={index} >
                             <label className='text-sm'>{item.label} {item.required &&<span className='text-red-500'>*</span>}</label> 
                            {(item.fieldType == 'text'|| item.fieldType == 'number')?<InputField item={item}/>:item.fieldType == 'dropdown'?<Dropdown item = {item}/>:
                            item.fieldType=='textarea'?<TextArea item= {item}/>:null}
                        </div>

                    ))}
                </div>


                {/* features list  */}

                <div>
                <Separator className='my-6'/>

                    <h2 className='font-medium text-xl my-6'>Features </h2>
                    <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
                        {features.features.map((item,index)=>(
                            <div key = {index} className='flex gap-2 items-center'> <Checkbox />
                            <h2>{item.label}</h2>
</div>

                        ))}

                    </div>
                </div>

                {/* car images  */}




            </form>
        </div>
    </div>
  )
}

export default AddListing