import React from "react";
import Card from "./Card";
import { YouTubes} from "./Array";
import { useState } from "react";
import { Link } from "react-router-dom";

function YouTube() {
const[query, setQuery] = useState("");
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
<div className="App">

  <div className="flex">
    <div className="b">
  <h3>{ctime}</h3>
    <br/><span className="a"><h2>{greeting}</h2></span>
    </div>
  <div className="head">
    The Top Web Series on YouTube.
  </div>
  <input
  type="text"
  placeholder="  search"
  className="search"
  onChange={(e)=> setQuery(e.target.value)}
/>
</div>
<div className="Nets">
<div className="Net">
        <Link to="/">
        <img src="./Assets/HOME.png" alt="mypic" className="Net__img" />
        </Link>
        </div>
        <div className="Net">
        <Link to="/Netflix">
        <img src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png" alt="mypic" className="Net__img" /> 
        </Link>
        </div>
        <div className="Net">
        <Link to="/Amazon Prime">
        <img src="https://television.mxdwn.com/wp-content/uploads/2017/04/amazon-prime.jpg" alt="mypic" className="Net__img" />
        </Link>
        </div>
        <div className="Net">
        <Link to="/Hotstar">
        <img src="https://www.exchange4media.com/news-photo/97627-HOTSTARLOGO.jpg" alt="mypic" className="Net__img" />    
        </Link>
        </div>
    </div>
{YouTubes.filter((user)=>
user.sname.toLowerCase().includes(query)).map((val,i) => {
     return(
      <div key={i}>    
      <Card 
     imgss={val.imgss}
     title={val.title}
     sname={val.sname}
     link={val.link}></Card>
     </div>
     );})}
            </div>
  )
    }
export default YouTube;
