// import AnimatedCard from "./Components/AnimatedCart";
import BottomAdTask from "./Components/BottomAdTask";
import Contact from "./Components/Contact/Contact";
import MainFeature from "./Components/Features/MainFeature";
import Footer from "./Components/Footer/Footer";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
import Testinomials from "./Components/Testinomials/Testinomials";
import TickerScroll from "./Components/TickerScroll/TickerScroll";
import ContactBtn from "./Components/ui/ContactBtn";
import Video from "./Components/Video";
import WorksWith from "./Components/WorksWith/WorksWith";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Video />
      <TickerScroll />
      <WorksWith />
      <MainFeature />
      <Services />
      <ContactBtn />
      <Testinomials />
      <Contact />
      <BottomAdTask />
      {/* <AnimatedCard /> */}
      <Footer />
    </>
  );
}

export default App;
