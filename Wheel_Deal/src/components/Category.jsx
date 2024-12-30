import Data from '@/Shared/Data'
import React from 'react'

const Category = () => {
  return (
    <div className='mt-40'>
      <h2 className='font-bold text-3xl text-center mb-6'>Browse by Type</h2>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-9 xl:grid-cols-9 gap-6 px-4 sm:px-8 md:px-20'>
        {Data.Category.map((category, index) => (
          <div
            key={index}
            className='border rounded-xl p-3 items-center flex flex-col gap-2 hover:shadow-md cursor-pointer'
          >
            <img
              src={category.icon}
              alt={`${category.name} icon`}
              width={35}
              height={35}
            />
            <h2 className='text-sm font-medium text-gray-700'>{category.name}</h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Category
