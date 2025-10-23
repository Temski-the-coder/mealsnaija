import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const galleryItems = [
  {
    type: "image",
    url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760912047/IMG-20251019-WA0007_ftod9i.jpg",
    alt: "Jollof rice and chicken",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/du4wv1tso/video/upload/v1761125755/WhatsApp_Video_2025-10-21_at_18.58.23_90c422f1_yypmv4.mp4",
    alt: "customer-review",
  },
  {
    type: "video",
    url: "https://res.cloudinary.com/du4wv1tso/video/upload/v1761045382/WhatsApp_Video_2025-10-20_at_00.22.50_5ae843f7_urzy9d.mp4",
    alt: "Surprise Video Package",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1760913709/IMG-20251019-WA0004_px0eui.jpg",
    alt: "Finger food",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1761046516/IMG-20251019-WA0010_ralchn.jpg",
    alt: "Chef Ayi",
  },
  {
    type: "image",
    url: "https://res.cloudinary.com/du4wv1tso/image/upload/v1761046530/IMG-20251019-WA0005_kzhbwm.jpg",
    alt: "Chef Ayi and a celeb",
  },
];

export default function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const navigate = useNavigate();

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
    navigate("/");
  }, [navigate]);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % galleryItems.length
    );
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null
        ? 0
        : prev === 0
        ? galleryItems.length - 1
        : prev - 1
    );
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, handleNext, handlePrev, handleClose]);

  return (
    <section id="gallery" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          MealsNaija <span className="text-orange-500">Gallery</span>
        </h2>
        <p className="text-gray-500 italic mt-2">
          Our food, people & places
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedIndex(index)} // use index here
            className="relative overflow-hidden rounded-2xl cursor-pointer group"
          >
            {item.type === "image" ? (
              <img
                src={item.url}
                alt={item.alt}
                className="w-100 h-100 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <video
                src={item.url}
                className="w-100 h-100 object-cover rounded-2xl"
                muted
                loop
                autoPlay
              />
            )}
          </div>
        ))}
      </div>

      
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="relative max-w-3xl w-full p-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 bg-white text-white rounded-full p-2 hover:bg-gray-200"
            >
              ✕
            </button>

            {/* Left Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white text-3xl px-3 py-1 rounded-full transition"
            >
              ←
            </button>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white text-3xl px-3 py-1 rounded-full transition"
            >
              →
            </button>

            {/* Display Selected Item */}
            {galleryItems[selectedIndex].type === "image" ? (
              <img
                src={galleryItems[selectedIndex].url}
                alt={galleryItems[selectedIndex].alt}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            ) : (
              <video
                src={galleryItems[selectedIndex].url}
                controls
                autoPlay
                className="w-full h-auto rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
}
