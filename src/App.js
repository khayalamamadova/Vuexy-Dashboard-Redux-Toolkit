import Landing from "./pages/Landing";
import Error from "./pages/Error";
import Register from "./pages/Register";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SharedLayout from "./pages/Dashboard/SharedLayout";
import Profile from "./pages/Dashboard/Profile";
import AddJobs from "./pages/Dashboard/AddJobs";
import AllJobs from "./pages/Dashboard/AllJobs";
import Stats from "./pages/Dashboard/Stats";
import ProtectedRouter from "./pages/Dashboard/ProtectedRouter";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRouter>
          <SharedLayout/>
          </ProtectedRouter>
        }>
          <Route index element={<Stats/>}/>
          <Route path='all-jobs' element={<AllJobs/>}/>
          <Route path='add-jobs' element={<AddJobs/>}/>
          <Route path='profile' element={<Profile/>}/>
          <Route path='stats' element={<Stats/>}/>
        </Route>
        <Route path="/landing" element={<Landing/>} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <ToastContainer/>
    </BrowserRouter>
  );
}

export default App;
