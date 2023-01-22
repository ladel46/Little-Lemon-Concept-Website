import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Highlights></Highlights>
        <Testimonials></Testimonials>
        <About></About>
      </main>
    </>
  );
}

export default App;
