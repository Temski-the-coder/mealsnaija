
import Header from "../src/components/Header/header";
import Home from "../src/components/Home/home";
import Reservation from "../src/components/Reservation/reservation";
import Features from "../src/components/feature/features";
import About from "../src/components/about/aboutSection";
import Menu from "../src/components/menu/menuSection";
import ProductGallery from "../src/components/gallery/GallerySection";
import Testimonials from "../src/components/reviews/testimonials";
import Footer from "../src/components/footer/footer";
import Contact from "../src/components/contact/Contact";


const PageLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e7c292] via-[#fff9f3] to-[#f0c6c6]">
      {/* Header */}
      <Header />

      {/* Hero + Reservation combined */}
      <section className="relative pt-25 md:pt-0">
        <Home />
        {/* Reservation floats over hero */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-10rem] md:bottom-[-7rem] z-30 w-full max-w-3xl px-4 top-210 md:top-145">
          <Reservation />
        </div>
      </section>

      {/* Features and the rest spaced evenly */}
      <main className="flex flex-col space-y-40">
        <section className="pt-95 md:pt-25">
        <Features />
        </section>

        <section>
        <About />
        </section>

        <section>
        <Menu />
        </section>

        <section>
        <ProductGallery />
        </section>

        <section>
        <Testimonials />
        </section>

        <section>
          <Contact />
        </section>

      {/* Footer */}
      <Footer />
      </main>
    </div>
  );
};

export default PageLayout;