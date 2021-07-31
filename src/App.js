import Header from "./components/Header";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";

library.add(fab, fas);

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main
        style={{
          backgroundColor: "var(--dark)",
          minHeight: "calc(100vh - var(--header-size) - var(--footer-size))",
        }}
      ></main>
      <Footer></Footer>
    </div>
  );
}

export default App;
