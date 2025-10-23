
import Header from "../src/components/Header/header";
import Home from "../src/components/Home/home";
import Features from "../src/components/feature/features";
import About from "../src/components/about/aboutSection";
import Menu from "../src/components/menu/menuSection";
import ProductGallery from "../src/components/gallery/GallerySection";
import Testimonials from "../src/components/reviews/testimonials";
import Footer from "../src/components/footer/footer";
import Contact from "../src/components/contact/Contact";


const PageLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e7c292] via-[#fee7cf] to-[#f5c378]">
      {/* Header */}
      <Header />

      {/* Hero + Reservation combined */}
      <section className="pt-20 md:pt-0">
        <Home />
        {/* Reservation floats over hero */}
      </section>

      {/* Features and the rest spaced evenly */}
      <main className="flex flex-col space-y-40">
        <section className="pt-25 md:pt-5">
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