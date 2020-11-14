import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/components/headers/Header";
import { useStateProviderValue } from "./StateProvider";

function App() {
  const [{ check }, dispatch] = useStateProviderValue();
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        {check}
      </div>
    </BrowserRouter>
  );
}

export default App;
