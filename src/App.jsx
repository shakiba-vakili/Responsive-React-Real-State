import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import "./App.css";
import Company from "./components/Company/Company"
function App() {
  return (
    <div className="App">
      <div className="">
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Company/>
    </div>
  );
}

export default App;
