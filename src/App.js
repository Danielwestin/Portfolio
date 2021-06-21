import "./App.scss";
import Header from "./components/header";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import IntroScreen from "./components/ux/introScreen";
import { Borders } from "./components/borders";

function App() {
  const element = useRoutes(routes);
  console.log(element);
  return (
    <>
      {/* <IntroScreen /> */}
      <Borders>{element}</Borders>
    </>
  );
}

export default App;
