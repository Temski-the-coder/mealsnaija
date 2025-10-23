import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonialsData = [
  {
    name: "Michael",
    review:
      "MealsNaija completely changed my dining experience. The meals are top-notch!",
  },
  {
    name: "Sarah",
    review: "Delicious and beautifully presented! Definitely ordering again.",
  },
  {
    name: "James",
    review: "Customer service was excellent and the meals arrived on time.",
  },
  {
    name: "Tunde",
    review: "The flavors were authentic and rich. Highly recommend MealsNaija!",
  },
  {
    name: "Amaka",
    review: "I loved how professional and responsive the team was. Great food!",
  },
  {
    name: "Grace",
    review: "Perfectly cooked, well packaged, and truly satisfying.",
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-16 px-4 sm:px-6 max-w-[300px] md:max-w-7xl mx-auto">
      {/* HEADER */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          MealsNaija{" "}
          <span className="text-orange-500">Customer Testimonials</span>
        </h2>
        <p className="text-gray-500 italic text-sm md:text-base">
          Hear what our amazing customers have to say.
        </p>
      </div>

      {/* SWIPER SLIDER */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={24}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10"
      >
        {testimonialsData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-orange-300/10 flex flex-col justify-between items-center gap-4 rounded-2xl shadow-lg p-6 text-center h-full border border-orange-100 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900">
                {item.name}
              </h3>
              <p className="text-gray-600 text-sm md:text-base italic leading-relaxed">
                “{item.review}”
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
