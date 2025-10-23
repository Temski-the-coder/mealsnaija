import menuImg1 from "../../assets/menu-1.jpg";
import menuImg2 from "../../assets/menu-2.jpg";
import menuImg3 from "../../assets/menu-3.jpg";
import { useState } from "react";


const ImageList = [
  {
    id: 1,
    image: menuImg1,
  },
  {
    id: 2,
    image: menuImg2,
  },
  {
    id: 3,
    image: menuImg3,
  },
];



const Home = () => {
  const [imageId, setImageId] = useState(menuImg2);
  return (
    <>
      <div
        className="min-h-[600px] flex justify-center items-center text-center px-4 sm:px-8 md:px-12"
      >
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* text content section */}
            <div className="flex flex-col md:flex-col justify-center gap-4 pt-0 md:pt-12 text-left md:text-center order-2 md:order-1">
              <h1
                className="mx-auto text-white text-2xl sm:text-2xl md:text-5xl font-bold animate-fade-in"
              >
                Welome to MealsNaija By Chef Ayi
              </h1>
              <p className="text-sm sm:text-sm md:text-sm text-white max-w-md md:max-w-[400px] animate-fade-in-delay-1">
                At MealsNaija by Chef Ayi, we craft unforgettable dining
                experiences that blend rich Nigerian flavors with global
                inspiration, From private chef services to luxury dining setups,
                every meal is personalized to your taste and lifestyle. We bring
                fine dining into your home — whether for intimate dinners,
                special celebrations, or long-term bookings. With elegant
                presentation and fresh, flavorful dishes, we turn everyday
                moments into culinary memories. Experience comfort, class, and
                creativity on every plate.
              </p>

              <div
                className="flex gap-4 justify-center md:justify-center animate-fade-in-delay-2"
              >
                <a href="#contact">
                <button
                  className="button text-white px-4 py-2 rounded-full transition">
                  Order Now
                </button>
                </a>

                <a href="#menu">
                <button
                  className="button border border-gray-500 text-white px-6 py-3 rounded-full hover:bg-gray-100 transition"
                >
                  View Menu
                </button>
                </a>
              </div>
            </div>
            {/* image section */}
            <div className="order-2 md:order-2 min-h-[250px] md:min-h-[450px] flex flex-col justify-center items-center relative animate-fade-in-delay-3">
              {/* main image */}
              <div>
                <img
                  src={imageId}
                  alt=""
                  className="w-[250px] sm:w-[300px] md:w-[350px] rounded-full animate-slow-spin"
                />
              </div>
              {/* main image */}
              <div className="flex md:flex-col lg:flex-col md:top-1/2 lg:top-1/2 md:-translate-y-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:-right-10 rounded-full animate-fade-in-delay-4">
                {ImageList.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] object-contain inline-block hover:scale-105 rounded-full cursor-pointer animate-slow-spin duration-200" onClick={() => {
                      setImageId(
                        item.id === 1 ? 
                        menuImg1 : item.id === 2 ? menuImg2 : menuImg3
                      )
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default Home;
