import "./App.css";
import { Fifth } from "./Components/Fifth/Fifth";
import { First } from "./Components/First/First";
import { Fourth } from "./Components/Fourth/Fourth";
import { Header } from "./Components/Header/Header";
import { Second } from "./Components/Second/Second";
import { Seventh } from "./Components/Seventh/Seventh";
import { Sixth } from "./Components/Sixth/Sixth";
import { Third } from "./Components/Third/Third";

function App() {
  return (
    <div className="App">
      <Header />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <Seventh />
    </div>
  );
}

export default App;
