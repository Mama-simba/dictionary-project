import React from "react";

import "./Photos.css";

export default function Photos(props){
    if (props.photos){
        console.log(props.photos);
        return (
            <div className="Photos">
                <div className="row">
                    {props.photos.map(function (photo, index) {
                       return (
                           <div className="col-4" key={index}>
                               <a href={photo.src.original} target="_blank" rel="noreferrer">
                                 <img src= {photo.src.landscape} className="img-fluid" alt="visual example of the searched word" />
                               </a>
                           </div>    
                       );   
                    })} 
               </div>
            </div>
        );
    } else {
        return null;
    }

}