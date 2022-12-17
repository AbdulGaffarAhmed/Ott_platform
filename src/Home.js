import { useState } from "react";
import { Link } from "react-router-dom";
function Home(){
    const newdate = new Date().getHours();
let time = new Date().toLocaleTimeString();
const [ctime, setcTime]=useState(time);
const updatedTime=()=>{
  time=new Date().toLocaleTimeString();
  setcTime(time);
};
setInterval(updatedTime,1000);
let greeting ='';
if(newdate<=12){
  greeting='Good Morning.';
}else if(newdate<=17){
  greeting='Good Afternoon.';
}else{
  greeting='Good Evening.';
}
  return( 

<>
  <div className="flexs">
    <div className="b">
  <h3>{ctime}</h3>
    <br/><span className="a"><h2>{greeting}</h2></span>
    </div>
  <div className="heads">
    The Top Web Series on OTT Platforms.
  </div>
  </div>
    <div className="News">
        <div className="New">
        <Link to="/Netflix">
        <img src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png" alt="mypic" className="New__img" /> 
        </Link>
        </div>
        <div className="New">
        <Link to="/Amazon Prime">
        <img src="https://television.mxdwn.com/wp-content/uploads/2017/04/amazon-prime.jpg" alt="mypic" className="New__img" />
        </Link>
        </div>
        <div className="New">
        <Link to="/Hotstar">
        <img src="https://www.exchange4media.com/news-photo/97627-HOTSTARLOGO.jpg" alt="mypic" className="New__img" />    
        </Link>
        </div>
        <div className="New">
        <Link to="/YouTube">
        <img src="https://i.ytimg.com/vi/JYWezI9BN0s/maxresdefault.jpg" alt="mypic" className="New__img" />
        </Link>
        </div>
    </div>
   </> )
}
export default Home;