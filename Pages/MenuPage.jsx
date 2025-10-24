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
        name: "Stir Fry spaghetti",
        stars: 4.5,
        rating: "4.5 (3.8K)",
        description: "Spaghetti tossed with vegetables and savory sauce for a bold, street-style flavor.",
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
      {
        name: "Arrabiata pasta",
        stars: 5,
        rating: "5.0 (3.5K)",
        description: "Classic Italian pasta tossed in a spicy, tangy tomato-based sauce.",
        image: [
          {
            url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760902383/IMG_9278_gizjla.jpg",
            altText: "Arrabiata pasta",
          },
        ],
        category: "Main dish",
      },
      {
        name: "Family Food tray",
        stars: 5,
        rating: "5.0 (3.5K)",
        description: "A generous assortment of flavorful dishes made for sharing and family enjoyment.",
        image: [
          {
            url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760902382/IMG_0466_xewput.jpg",
            altText: "Family Food Tray",
          },
        ],
        category: "Main dish",
      },
      {
        name: "Baked potato stir fry, steak and infused corn",
        stars: 5,
        rating: "5.0 (3.5K)",
        description: "Golden baked potatoes stir-fried with vegetables and aromatic spices.",
        image: [
          {
            url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760902381/IMG_0623_ee0h9o.jpg",
            altText: "Baked potato stir fry",
          },
        ],
        category: "Main dish",
      },
      {
        name: "Chicken breast stir fry with veggies",
        stars: 5,
        rating: "5.0 (3.5K)",
        description: "Tender chicken breast sautéed with colorful, crunchy vegetables in a savory sauce.",
        image: [
          {
            url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760902381/IMG_0717_lyapbw.jpg",
            altText: "Chicken breast stir fry",
          },
        ],
        category: "Dessert",
      },
      {
        name: "Waffles, sausage and egg",
        stars: 5,
        rating: "5.0 (3.5K)",
        description: "Fluffy waffles paired with savory sausage and perfectly cooked eggs.",
        image: [
          {
            url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760913709/WhatsApp_Image_2025-10-19_at_01.50.34_8d276120_lsqakl.jpg",
            altText: "Waffles Meal",
          },
        ],
        category: "Appetizer",
      },
      {
        name: "Banga and Starch",
        stars: 5,
        rating: "5.0 (3.5K)",
        description: "Traditional palm nut soup served with soft, stretchy starch for a rich, native delight.",
        image: [
          {
            url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760912047/IMG-20251019-WA0009_ojq2ph.jpg",
            altText: "Banga and Starch",
          },
        ],
        category: "Main dish",
      },
      {
        name: "Roasted peppered fish and Roasted plantain",
        stars: 5,
        rating: "5.0 (3.5K)",
        description: "Char-grilled spicy fish served with sweet roasted plantains.",
        image: [
          {
            url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760912047/IMG-20251019-WA0006_xwcepm.jpg",
            altText: "Roasted fish and plantain",
          },
        ],
        category: "Appetizer",
      },
      {
        name: "Jollof Rice and chicken",
        stars: 5,
        rating: "5.0 (3.5K)",
        description: "Smoky, party-style jollof rice paired with crispy, flavorful chicken.",
        image: [
          {
            url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760911963/IMG-20251019-WA0014_npczaa.jpg",
            altText: "Jollof rice and chicken",
          },
        ],
        category: "Main dish",
      },
      {
        name: "Roasted potatoe and Sauce",
        stars: 5,
        rating: "5.0 (3.5K)",
        description: "Oven-roasted potatoes served with a rich, spicy dipping sauce.",
        image: [
          {
            url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760864939/IMG_9345_xqoprk.jpg",
            altText: "roasted potatoe meal",
          },
        ],
        category: "Main dish",
      },
      {
        name: "Garnished Fish stew",
        stars: 5,
        rating: "5.0 (3.5K)",
        description: "Fresh fish cooked in a thick, seasoned tomato stew with herbs and peppers.",
        image: [
          {
            url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760911963/IMG-20251019-WA0015_ew9nco.jpg",
            altText: "Fish stew",
          },
        ],
        category: "Appetizer",
      },
      {
        name: "Native Rice",
        stars: 5,
        rating: "5.0 (3.5K)",
        description: "Local spiced rice cooked with palm oil, dried fish, and traditional seasonings.",
        image: [
          {
            url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760911963/IMG-20251019-WA0017_t9wsue.jpg",
            altText: "Native Rice",
          },
        ],
        category: "Main dish",
      },
    ];
    
    const categories = []; //"All","Appetizer","Main dish","Breakfast","Dessert",
    
    export default function MenuPage() {
      const [activeCategory, setActiveCategory] = useState("All");
      const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
    
      const filteredItems =
        activeCategory === "All"
          ? menuItems
          : menuItems.filter((item) => item.category === activeCategory);

    return (
        <section className="py-12 px-4 max-w-7xl mx-auto flex flex-col md:flex-col min-h-screen bg-gradient-to-br from-[#e7c292] via-[#fff9f3] to-[#f0c6c6]">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold">
              MealsNaija <span className="text-orange-500">Menu</span>
            </h2>
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
                        {[...Array(totalStars - fullStars - (hasHalfStar ? 1 : 0))].map(
                          (_, i) => (
                            <IoStarOutline key={`empty-${i}`} />
                          )
                        )}
                    </span>
                    <span className="text-yellow-500 text-sm">{item.rating}</span>
                  </div>
                </div>
              </div>
              );
           })}
          </div>
          <button onClick={handleClick} className="button top-8">Return To Home Page</button>
          </section>
  )
}