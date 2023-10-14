import React from "react";
import {  } from "react-icons/bs";
import "../CSS files/RectangleCard.css";

const RectangleCard = (props) => {
  return (
    <div>
      <div className="card">
        <div className="card-inner">
          <div className="circle-inner" style={{backgroundColor : props.backgroundColor}}>
            
              <div className="card-icon" style={{color:props.color}}> 
              {props.icon}
              </div>
           
          </div>
          <h5 style={{color:"gray"}}>
            {props.title}
          </h5>
          <h4>&#36;{props.price}</h4>
          <br/>
        </div>
      </div>
    </div>
  );
};

export default RectangleCard;
