import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";

import Auth from "./components/views/Auth";
import 
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Auth authRoute={'login'} />} />
          <Route path="/register" element={<Auth authRoute={'register'} />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route path=""
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
