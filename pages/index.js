import Cta from "../components/Cta";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../components/Welcome";
import Descripcion from "../components/Descripcion";
import Contact from "../components/Contact";

export default function IndexPage() {
  return (
    <div>
      <Header />
      <main>
        <Welcome />
        <Descripcion />

        <Cta />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
