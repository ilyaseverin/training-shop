import "./App.css";
import Header from "../header/header";

import Footer from "../footer/footer";
import MainClothesComponent from "../mainClothesComponent/mainClothesComponent";

function App() {
  return (
    <div className="App">
      <Header />
      <MainClothesComponent />

      <Footer />
    </div>
  );
}

export default App;
