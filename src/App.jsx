import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Trending from "./sections/Trending";
import  TopSelling from "./sections/TopSelling";
import Reviews from "./sections/Reviews";
import Footer from "./components/Footer"
import BestO2 from "./sections/BestO2";

function App() {
  return (
<div className="bg-[#0B1208] min-h-screen text-white font-sans overflow-x-hidden">     <Navbar/>
     
      <Hero/>
      <Trending/>
      <TopSelling/>
        <Reviews/>
        <BestO2/>
      <Footer/>
      
    </div>
  )
}
export default App