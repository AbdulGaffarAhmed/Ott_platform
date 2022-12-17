import { BrowserRouter, Route, Routes }  from "react-router-dom";
import Netflix from "./Net";
import Amazon from "./Amazon";
import Hotstar from "./Hotstar";
import YouTube from "./YouTube";
import Home from "./Home";
function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
            <Route path="/Netflix" element={<Netflix/>}></Route>
            <Route path="/Amazon Prime" element={<Amazon/>}></Route>
            <Route path="/Hotstar" element={<Hotstar/>}></Route>
            <Route path="/YouTube" element={<YouTube/>}></Route>
        </Routes>
            </BrowserRouter>
    );
}
export default App;