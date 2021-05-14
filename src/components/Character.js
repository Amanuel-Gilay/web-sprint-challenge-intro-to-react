// Write your Character component here
import React from 'react';
export default function Character (props) {
    
    const { dataStar } = props;

    const Result = (props) =>(
        <div>
        <p>{props.info.name}</p>
        <p>Birth year: {props.info.birth_year}</p>
        <p>Eyes color: {props.info.eye_color}</p>
        <p>Gender: {props.info.gender}</p>
        <p>Hair Color: {props.info.hair_color}</p>
        <p>Mass: {props.info.mass}</p>
        <p>Skin Color: {props.info.skin_color}</p> 
        </div>
    );
    return(
        <div className = 'character'>
            {dataStar.map((item, i)=>{
                return <Result key ={i} info = {item}/>
            })}
        </div>
    )
}

