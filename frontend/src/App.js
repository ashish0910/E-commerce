import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/components/headers/Header";
import { useStateProviderValue } from "./StateProvider";
import Home from "./components/pages/Home";

function App() {
  const [{ check }, dispatch] = useStateProviderValue();
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <Home></Home>
      </div>
    </BrowserRouter>
  );
}

export default App;
