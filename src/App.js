import "./App.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import FirstCard from "./Components/FirstCard";
import SecondCard from "./Components/SecondCard";
import ThirdCard from "./Components/ThirdCard";
import FourthCard from "./Components/FourthCard";
import FifthCard from "./Components/FifthCard";
import SixthCard from "./Components/SixthCard";
import SeventhCard from "./Components/SeventhCard";
import Footer from "./Components/Footer";
import SideMenu from "./Components/SideMenu";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <Header />
      <Navbar />
      <FirstCard />
      <SecondCard />
      <ThirdCard />
      <FourthCard />
      <FifthCard />
      <SixthCard />
      <SeventhCard />
      <Footer />
    </div>
  );
}

export default App;
