import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Landing from "./components/layout/Landing";
import Auth from "./components/views/Auth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/login" element={<Auth authRoute={'login'} />} />
        <Route path="/register" element={<Auth authRoute={'register'} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
