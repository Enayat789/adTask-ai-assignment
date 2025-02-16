import MainFeature from "./Components/Features/MainFeature";
import Introduction from "./Components/Introduction";
import Navbar from "./Components/Navbar/Navbar";
import TickerScroll from "./Components/TickerScroll/TickerScroll";
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
    </>
  );
}

export default App;
