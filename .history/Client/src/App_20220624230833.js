import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Navi}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
