import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./components/layout/Landing";
import Logi

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/" element={<} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
