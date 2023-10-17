import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Company from "./components/Company/Company"
import Residencies from "./components/Residencies/Residencies"
import Value from "./components/Value/Value"
function App() {
  return (
    <div className="App">
      <div className="">
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Company/>
      <Residencies/>
      <Value/>
    </div>
  );
}

export default App;
