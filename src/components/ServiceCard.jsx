const ServiceCard = ({ imgURL, label, subtext }) => {
    return (
      <div className='flex-1 sm:w-[250px] sm:min-w-[250px] w-full rounded-[20px] shadow-3xl px-6 py-8'>
        <div className='w-11 h-11 flex justify-center items-center bg-coral-red rounded-full'>
          <img src={imgURL} alt={label} width={24} height={24} />
        </div>
        <h3 className='mt-5 text-xl leading-normal font-bold'>
          {label}
        </h3>
        <p className='mt-3 break-words text-lg leading-normal text-slate-gray'>
          {subtext}
        </p>
      </div>
    );
  };
  
  export default ServiceCard;  