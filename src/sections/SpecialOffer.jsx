import { arrowLeft } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffer = () => {
  return (
    <section className='flex justify-between items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex flex-1 flex-col'>
        <h2 className='text-4xl font-bold'>
            پیشنهاد
          <span className='text-coral-red'> ویژه</span>          
        </h2>
        <p className='mt-4 text-gray-500'>
        سفر خریدی را آغاز کنید که تجربه شما را با آن بازتعریف می کند
           معاملات بی نظیر از انتخاب های برتر گرفته تا پس انداز باورنکردنی، ما
           ارزش بی نظیری را ارائه می دهد که ما را متمایز می کند.
        </p>
        <p className='mt-6 text-gray-500'>
        در قلمروی از امکاناتی که برای برآورده کردن خواسته‌های منحصربه‌فرد شما طراحی شده‌اند، پیشی بگیرید و از عالی‌ترین انتظارات پیشی بگیرید. سفر شما با ما استثناییست.
        </p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='بریم برای خرید' iconURL={arrowLeft} />
          <Button
            label='مشاهده بیشتر'
            backgroundColor='bg-white'
            borderColor='border-slate-gray'
            textColor='text-slate-gray'
          />
        </div>
      </div>
      <div className='flex-1'>
        <img
          src={offer}
          alt='Shoe Promotion'
          width={773}
          height={687}
          className='object-contain w-full'
        />
      </div>
    </section>
  );
};

export default SpecialOffer;
