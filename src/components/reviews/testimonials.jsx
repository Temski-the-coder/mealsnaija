import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonialsData = [
  {
    name: "Michael",
    review: "MealsNaija completely changed my dining experience. The meals are top-notch!",
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280, // Large screens (e.g., laptops)
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024, // Tablets
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 768, // Phones
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="reviews" className="py-5 md:py-16 px-1 md:px-6">
      {/* HEADER */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          MealsNaija{" "}
          <span className="text-orange-500">Customer Testimonials</span>
        </h2>
        <p className="text-gray-500 italic text-sm md:text-base">
          Hear what our amazing customers have to say.
        </p>
      </div>

      {/* SLIDER */}
      <div className="max-w-[300px] md:max-w-6xl mx-auto">
        <Slider {...settings}>
          {testimonialsData.map((item, index) => (
            <div key={index} className="px-3">
              <div className="bg-orange-300/10 flex flex-col justify-between items-center gap-4 rounded-2xl shadow-lg p-6 text-center h-full border border-orange-100 hover:shadow-xl transition-all duration-300 relative">
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.name}
                </h3>
                <p className="text-gray-600 text-sm md:text-base italic leading-relaxed">
                  “{item.review}”
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
