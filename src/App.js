import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Search/>
    </div>
  );
}

export default App;
