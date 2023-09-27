import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Workout from "./Pages/Workout";
import Goal from "./Pages/Goal";
import Profile from "./Pages/Profile"; 
import { useSelector } from "react-redux";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import { useMediaQuery } from "@mui/material";
import BottomNav from "./components/BottomNav";
import Calculators from "./Pages/Calculators";

const router = createBrowserRouter([ 
  { path: "*", Component: Root },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
function Root() {
  // const isAuth = Boolean(useSelector(state=>state.auth.token));
  const isAuth=true;
  const location = useLocation();
  const mobileView = useMediaQuery('(max-width:720px)');
  return (
    <>
    {(location.pathname==="/login" || location.pathname==="/signup") ? null: 
    <>
    <Navbar/>
    {mobileView && <BottomNav/>}
    </>}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/workout' element={isAuth ? <Workout /> : <Navigate to='/signup'/>} />
          <Route path='/goal' element={isAuth ? <Goal /> : <Navigate to='/signup'/>} />
          <Route path='/profile' element={isAuth ? <Profile /> : <Navigate to='/signup'/>} />
          <Route path='/calculators' element={isAuth ? <Calculators/> : <Navigate to='/signup'/>} />
        </Routes>
    </>
  ); 
}