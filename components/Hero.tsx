"use Client";

import React from 'react';
import CustomButton from './CustomButton';

const hero = () => {
   const handleScroll=() => {

   }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                Find , book, or rent a car - quickly and 
                easily! 
            </h1>

            <p className='hero__subtitle'>Streamline your car
            rental experience with our effortless booking process. 
            </p>

            <CustomButton 
            title="Explore Cars"
            containerStyles="bg-primary-blue
            text-while rounded-full mt-10"
            HandleClick={handleScroll}
            />
        </div>


    </div>
  )
}

export default hero;
