import { useState } from "react";
import { IoStarSharp, IoStarHalfSharp, IoStarOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const menuItems = [
  {
    name: "Shrimps and eggs salad",
    stars: 5,
    rating: "5.0 (3.5K)",
    description: "A refreshing mix of juicy shrimp, boiled eggs, and crisp greens tossed in a light dressing.",
    image: [
      {
        url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760864827/salad_qjfrwk.jpg",
        altText: "Shrimps and egg salad",
      },
    ],
    category: "Appetizer",
  },
  {
    name: "High Protein Breakfast",
    stars: 5,
    rating: "4.9 (1.5K)",
    description: "A hearty, energy-boosting combo of eggs, lean meat, and wholesome sides.",
    image: [
      {
        url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760902382/IMG_0529_p2huae.jpg",
        altText: "High protein Breakfast",
      },
    ],
    category: "Breakfast",
  },
  {
    name: "Chicken Breast Stir Fry With Veggies",
    stars: 4.5,
    rating: "4.5 (3.8K)",
    description: "Tender chicken breast sautéed with colorful, crunchy vegetables in a savory sauce.",
    image: [
      {
        url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760864827/stirfry_nwjlsu.jpg",
        altText: "Stir Fry spaghetti",
      },
    ],
    category: "Dessert",
  },
  {
    name: "Fried rice and salmon on a bed of cabbage",
    stars: 5,
    rating: "5.0 (3.2K)",
    description: "Fragrant fried rice served with grilled salmon over fresh shredded cabbage.",
    image: [
      {
        url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760864921/IMG_9238_pmymy6.jpg",
        altText: "Fried Rice",
      },
    ],
    category: "Main dish",
  },
];

const categories = []; //"All", "Appetizer", "Main dish", "Breakfast", "Dessert"

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/menu");
  };

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-12 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold">
          Let's Check <span className="text-orange-500">Our Menu</span>
        </h2>
        <p className="text-xl italic text-gray-500 mt-2">MealsNaija Menu</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-gray-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredItems.map((item, index) => {
          const fullStars = Math.floor(item.stars);
          const hasHalfStar = item.stars % 1 !== 0;
          const totalStars = 5;
          return (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <img
                src={item.image[0].url}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-bold flex">
                    {[...Array(fullStars)].map((_, i) => (
                      <IoStarSharp key={`full-${i}`} />
                    ))}
                    {hasHalfStar && <IoStarHalfSharp key="half" />}
                    {[
                      ...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0)),
                    ].map((_, i) => (
                      <IoStarOutline key={`empty-${i}`} />
                    ))}
                  </span>
                  <span className="text-yellow-500 text-sm">{item.rating}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={handleClick} className="button text-center flex top-5 text-sm md:text-md">
        See Full Menu
      </button>
    </section>
  );
}
