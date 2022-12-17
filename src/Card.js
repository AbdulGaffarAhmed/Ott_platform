
function Card(props) {
    return(
    <div className="Cards">
      <div className="Card">
     <img src={props.imgss} alt="mypic" className="card__img" />
        <div className="info">
            <span className="ctg">{props.title}</span>
            <h3 className="title">{props.sname}</h3>
            <a href={props.link}>
                <button>Watch Now</button>
            </a>
        </div>
      
      </div>
    </div>
    

   
);

}

export default Card;
