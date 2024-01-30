import { ReviewCard } from "../components";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-center text-3xl font-bold'>
        <span className='text-coral-red'>مشتری</span> هامون چی میگن؟       
      </h3>
      <p className='m-auto mt-4 max-w-lg  text-center text-gray-500'>
      چندین مورد از نظرات مشتری هایمان را در باره کیفیت نایکی ببینیم.
      </p>

      <div className='mt-12 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
