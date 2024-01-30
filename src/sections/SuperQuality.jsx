import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='text-3xl lg:max-w-lg font-bold'>
         ارائه بالاترین 
         <span className='text-coral-red'> کیفیت</span> در کفش های 
         <span className='text-coral-red'> نایکی</span>        
        </h2>
        <p className='mt-4 lg:max-w-lg text-gray-500'>
        کفش‌های ما که با دقت ساخته شده‌اند، با اطمینان از راحتی و استایل عالی، برای ارتقای تجربه شما طراحی شده‌اند و کیفیت، نوآوری و ظرافت بی‌نظیری را در اختیار شما قرار می‌دهند.
        </p>
        <p className='mt-6 lg:max-w-lg text-gray-500'>
        تعهد ما به جزئیات و عالی بودن رضایت شما را تضمین می کند.
        </p>
        <div className='mt-11'>
          <Button label='مشاهده جزئیات' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={shoe8}
          alt='product detail'
          width={470}
          height={422}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;
