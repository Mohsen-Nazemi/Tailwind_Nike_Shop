import { products } from "../constants";
import { PopularProductCard } from "../components";

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5'>
        <h2 className='text-4xl font-bold'>
          
          محصولات <span className="text-coral-red">محبوب</span> ما
        </h2>
        <p className='lg:max-w-lg mt-2 text-slate-gray'>
        کیفیت و سبک درجه یک را با انتخاب محصولات  ما تجربه کنید
            دنیایی از راحتی، طراحی و ارزش را کشف کنید
        </p>
      </div>

      <div className='mt-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
