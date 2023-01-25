import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header></Header>
      <main className="relative">
        <Hero></Hero>
        <Highlights></Highlights>
        <Testimonials></Testimonials>
        <About></About>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
