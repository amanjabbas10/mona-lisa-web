import "./style/style.css";
import Homepage from "./component/homepage";
import { useEffect } from "react";
import AOS from "aos";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
