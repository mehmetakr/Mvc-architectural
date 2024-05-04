import { BrowserRouter, Route, Routes } from "react-router-dom";
import Listpostcontroller from "./pages/Listpostcontroller";
import Addpage from "./pages/Addpostpage/Addpage";
import Header from "./Components/Header";
import  "./assets/style.scss"
function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Listpostcontroller />} />
          <Route path="/add-post" element={<Addpage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
