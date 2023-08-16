import {
  createBrowserRouter,
  Navigate,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar";
import Workout from "./Pages/Workout";
import Goal from "./Pages/Goal";
import Profile from "./Pages/Profile"; 
import { useSelector } from "react-redux";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";

const router = createBrowserRouter([ 
  { path: "*", Component: Root },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
function Root() {
  const isAuth = Boolean(useSelector(state=>state.auth.token));
  // const isAuth=true;
  return (
    <>
       {isAuth && <Navbar/>}
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={isAuth ? <Home /> : <Navigate to='/'/>} />
          <Route path='/workout' element={isAuth ? <Workout /> : <Navigate to='/'/>} />
          <Route path='/goal' element={isAuth ? <Goal /> : <Navigate to='/'/>} />
          <Route path='/profile' element={isAuth ? <Profile /> : <Navigate to='/'/>} />
        </Routes>
    </>
  ); 
}