import GlobalStyles from "./styles/GlobalStyles";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import AppLayout from "./main/AppLayout";
import Home from "./pages/Home";
import Ch01_getMapping from "./pages/Ch01_getMapping";
import Ch02_postApi from "./pages/Ch02_postApi";
import Ch03_putApi from "./pages/Ch03_putApi";
import Ch09_swagger from "./pages/Ch09_swagger";
import Ch04_persistence_product from "./pages/Ch04_persistence_product";
import Accordions from "./pages/Accordions";
import TipCalc from "./pages/TipCalc";
import SplitBill from "./pages/SplitBill";
import PageNotFound from "./ui/PageNotFound";
import './styles/output.css'

function App() {
  return (
    <>
      <GlobalStyles/>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout/>}>
            <Route index element={<Navigate replace to='home'/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='ch01-getMapping' element={<Ch01_getMapping/>}/>
            <Route path='ch02-postApi' element={<Ch02_postApi/>}/>
            <Route path='ch03-putApi' element={<Ch03_putApi/>}/>
            <Route path='ch09-swagger' element={<Ch09_swagger/>}/>
            <Route path='ch04_persistence_product' element={<Ch04_persistence_product/>}/>
            <Route path='accordions' element={<Accordions/>}/>
            <Route path='tip-calc' element={<TipCalc/>}/>
            <Route path='split' element={<SplitBill/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
