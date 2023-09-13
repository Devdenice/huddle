import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Illustration from "./components/Illustration";
import Numbers from "./components/Numbers";
import Ready from "./components/Ready";

function App() {
  return (
    <>
      {/* <div className="container mx-auto w-11/12 h-screen"> */}
      <Header />
      <Hero />
      <Numbers />
      <Illustration />
      <Ready />
      <Footer />
    </>
  );
}

export default App;
