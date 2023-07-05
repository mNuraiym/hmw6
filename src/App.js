import './App.css';
import NavBar from "./components/NavBar/NavBar";
import BusketPage from './pages/BusketPage/BusketPage';
import MainPage from "./pages/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";

function App()
{
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<NavBar />}>
          <Route index element={<MainPage />} />
          <Route path={'/busket'} element={<BusketPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
