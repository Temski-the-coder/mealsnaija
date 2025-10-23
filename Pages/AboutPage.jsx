import aboutImg from "../src/assets/ayiFP.jpg";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section className="max-w-full mx-auto mt-24 px-6 flex flex-col md:flex-row items-center gap-10 min-h-screen bg-gradient-to-br from-[#e7c292] via-[#fff9f3] to-[#f0c6c6]">
      <img
        src={aboutImg}
        alt="MealsNaija"
        className="w-70 h-100 rounded-2xl shadow-lg object-cover"
      />
      <div className="md:w-1/2 flex flex-col md:flex-col">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          About <span className="font-semibold text-orange-500">Chef Ayi</span>
        </h2>
        <p className="text-gray-600 leading-relaxed">
          My name is Aishat—Chef Ayi in the kitchen. I'm from the roots of Kogi
          State, born into a family where the women speak in spices and cook
          like it's a sacred ritual. My mom is a chef. So are my aunties. Food
          runs in our blood like pepper runs through our stew—bold, deep,
          unforgettable. I grew up watching them turn simple ingredients into
          magic. Every meal was a lesson, every kitchen a classroom. I didn't
          choose this life. It chose me. I've worked with hundreds of people
          from different parts of the world, learning and sharing stories
          through food. Now I carry that legacy with pride—honoring tradition
          while adding my own voice to the flavor. For me, cooking isn't just
          about feeding people; it's about connecting, storytelling, and keeping
          our roots alive through every bite. Embark with me on this culinary
          journey, where your plate may soon be graced by flavors carefully
          preserved and perfected through generations.
        </p>
        <button onClick={handleClick} className="button top-6"> Return to Home Page</button>
      </div>
    </section>
  );
};

export default AboutPage;
