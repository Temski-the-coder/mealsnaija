import ChefImg1 from "../../assets/ayiFP.jpg";
import ChefImg2 from "../../assets/ayiSP.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
 const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-10 md:px-20 lg:px-32 text-gray-800"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          {/* Two images side by side with curved corners */}
          <div className="flex gap-4">
            <img
              src={ChefImg1}
              alt="Restaurant interior"
              className="w-[160px] sm:w-[200px] md:w-[220px] lg:w-[250px] h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-cover rounded-[100px_0_0_100px] shadow-lg"
            />
            <img
              src={ChefImg2}
              alt="Dishes served"
              className="w-[160px] sm:w-[200px] md:w-[220px] lg:w-[250px] h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] object-cover rounded-[0_100px_100px_0] shadow-lg"
            />
          </div>

          {/* Experience Badge */}
          <div className="absolute bg-orange-500 text-white text-center rounded-full w-[100px] sm:w-[120px] md:w-[140px] h-[100px] sm:h-[120px] md:h-[140px] flex flex-col justify-center items-center shadow-xl">
            <span className="text-lg sm:text-xl md:text-3xl font-bold">
              CHEF <br />
              AYI
            </span>
            <span className="text-[10px] sm:text-xs md:text-sm leading-tight pb-3">
              Luxury
              <br />
              Private Chef
            </span>
          </div>
        </div>

        {/* Text Section */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 animate-fade-in">
            Meet <span className="text-orange-500">Chef Ayi</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed animate-fade-in-delay-1">
            My name is<strong> Aishat—Chef Ayi in the kitchen</strong>. I'm from
            the roots of Kogi State, born into a family where the women speak in
            spices and cook like it's a sacred ritual. My mom is a chef. So are
            my aunties. Food runs in our blood like pepper runs through our
            stew—bold, deep, unforgettable.
          </p>

          <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed animate-fade-in-delay-2">
            I grew up watching them turn simple ingredients into magic. Every
            meal was a lesson, every kitchen a classroom. I didn't choose this
            life. It chose me. I've worked with hundreds of people from
            different parts of the world, learning and sharing stories through
            food. Now I carry that legacy with pride—honoring tradition while
            adding my own voice to the flavor. For me, cooking isn't just about
            feeding people; it's about connecting, storytelling, and keeping our
            roots alive through every bite
          </p>

          <div className="flex justify-center md:justify-start gap-4 animate-fade-in-delay-3">
            <button onClick={handleClick} className="button text-white px-6 py-2 rounded-full transition">
              Learn More
            </button>

            <a href="#contact">
            <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
              Contact Me
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
