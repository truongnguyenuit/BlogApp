import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Landing from "./components/layout/Landing";
import 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
