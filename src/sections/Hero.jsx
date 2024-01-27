import { useState } from "react";

import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { bigShoe1 } from "../assets/images";
import { arrowLeft } from "../assets/icons";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);


  return (
    <section
    id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-20">

        <h1 className='mt-5 text-4xl max-sm:text-[25px] max-sm:leading-[32px] font-bold'>
          <span
           className='xl:whitespace-nowrap relative z-10 pl-10'>
            تازه رسیده های کفش
          </span>
          <br />        
          <span className='text-coral-red inline-block mt-4'> نایکی</span>
          
        </h1>

        <p className='text-slate-gray text-lg leading-8 mt-6 mb-6 sm:max-w-sm'>
        با کفش های شیک نایک، راحتی، کیفیت و نوآوری را در زندگی خود تجربه کنید.
        </p>

        <Button label='همین حالا خرید کن' iconURL={arrowLeft} />
        
        <div className='flex justify-center items-start flex-wrap w-full mt-10 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-2xl font-bold'>{stat.value}</p>
              <p className='leading-7 text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>


            

      </div>
      
      <div className='relative flex-1 flex justify-center items-center
       xl:min-h-screen max-xl:flex-col bg-primary bg-hero bg-cover bg-center'>
       <img
          src={bigShoeImg}
          alt='shoe colletion'
          width={410}
          height={302}
          className='object-contain relative z-9'
        />

        <div className='flex sm:gap-6 gap-4 lg:absolute bottom-0 max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  )
};

export default Hero;
