import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <Hero></Hero>
        <Highlights></Highlights>
        <Testimonials></Testimonials>
      </main>
    </>
  );
}

export default App;
