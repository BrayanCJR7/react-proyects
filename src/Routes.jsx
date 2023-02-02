import {BrowserRouter, Routes, Route} from "react-router-dom";
import {GoogleClone} from "./Pages/Google-clone/googleClone";
import {BataBit} from "./Pages/Bata-bit/bata-bit";
import {Home} from "./home";

export const Myroutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/googleClone" element={<GoogleClone/>}/>
                <Route path="/bataBit" element={<BataBit/>}/>
            </Routes>
        </BrowserRouter>
    )
}