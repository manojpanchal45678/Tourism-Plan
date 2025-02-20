import { useState } from "react";
function Card({id,image,info,price,name,onRemoveTour})
{
    const[readmore,setReadmore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}....`
    
    function onReadmoreHandler()
    {
      setReadmore(!readmore);
    }


    return (
    <div className="card">
       <img src={image} className="image"></img>
       
       <div className="tour-info">
       <div className="tour-details">
        <h3 className="tour-price">₹ {price}</h3>
        <h4 className="tour-name">{name}</h4>
       </div>
       <div className="description">
        {description}
        <span className="read-more" onClick={onReadmoreHandler}>
            {readmore ? ` Show Less` : `Read More`}
        </span>
       </div>
      </div>  

       <button className="btn-red" onClick={() => onRemoveTour(id)}>
               Not Intrested
       </button>
</div> 
  );
}
export default Card;