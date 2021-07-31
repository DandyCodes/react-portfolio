import Header from "./components/Header";
import Cube from "./components/Cube";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <Cube></Cube>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
