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
import Single from "./pages/Dashboard/Single";
import AddUser from "./pages/Dashboard/AddUser";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <ProtectedRouter>
          <SharedLayout/>
          </ProtectedRouter>
        }>
            <Route path="/">
              <Route index element={<Stats />} />
              <Route path="/:userId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              /> */}
            </Route>

          <Route path='all-jobs' element={<AllJobs/>}/>
          <Route path='add-jobs' element={<AddJobs/>}/>
          <Route path='add-user' element={<AddUser/>}/>
          <Route path='profile' element={<Profile/>}/>
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
