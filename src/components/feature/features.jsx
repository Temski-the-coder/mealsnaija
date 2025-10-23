import { FaUtensils, FaUserTie, FaClipboardList } from "react-icons/fa";
import { MdLocalDining } from "react-icons/md";

const features = [
  {
    id: "01",
    icon: <FaUtensils className="text-3xl" />,
    title: "Fresh Tasty Meals",
    description: "Enjoy meals prepared with the freshest ingredients and authentic flavors, made just for you.",
  },
  {
    id: "02",
    icon: <FaUserTie className="text-3xl" />,
    title: "Experienced Chef",
    description: "I bring passion, skill, and creativity to every plate served to your table.",
  },
  {
    id: "03",
    icon: <MdLocalDining className="text-3xl" />,
    title: "High Standard Dining",
    description: "i bring a perfect blend of comfort, flavor, and professional touch for daily dining.",
  },
  {
    id: "04",
    icon: <FaClipboardList className="text-3xl" />,
    title: "Daily Fresh Menu",
    description: "Our menu evolves daily to bring you new tastes, fresh ingredients, and exciting dishes.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-20 sm:px-10 md:px-20 pt-15">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
          Why Choose <span className="text-orange-500">MealsNaija?</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We blend passion, creativity, and excellence to make your dining experience unforgettable.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative bg-[#fff7ee] border border-orange-100 rounded-3xl shadow-md p-8 text-center hover:-translate-y-2 transition-transform duration-300 top-2"
          >
            {/* Icon bubble */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full shadow-lg">
              {feature.icon}
            </div>

            {/* Content */}
            <div className="mt-15">
              <h4 className="text-gray-900 font-semibold text-lg mb-2">{feature.title}</h4>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
