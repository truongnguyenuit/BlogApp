import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContext";
import ProtectedRoute from "./components/routing/ProtectedRoute";

import Auth from "./components/views/Auth";
import { Dashboard } from "./components/views/Dashboard";
import { About } from "./components/views/About";
function App() {
  return (
    <h1 classN="text-3xl font-bold underline">
      Hello world!
    </h1>
    // <AuthContextProvider>
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/login" element={<Auth authRoute={'login'} />} />
    //       <Route path="/register" element={<Auth authRoute={'register'} />} />
    //       {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
    //       <Route path="/dashboard" element={
    //         <ProtectedRoute protect={true}>
    //           <Dashboard/>
    //         </ProtectedRoute>}
    //       />
    //     </Routes>
    //   </BrowserRouter>
    // </AuthContextProvider>
  );
}

export default App;
