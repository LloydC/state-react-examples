import React from 'react'
import './Cat.css';
import Owner from '../Owner/Owner';

export default function Cat(props){
    return (
        <div className={"cat-house"}>
            <h2 className="cat-name">{props.name}</h2>
            <img src={props.img} alt="cat_image" width="200px" height="200px" style={{ borderRadius: '50%'}}/>
            <h3 className="cat-age">{props.age} years old</h3>
            <Owner name={props.owner} catName={props.name}/>
            <p>{props.name} {props.sleeping ? 'is sleeping' : 'is awake'}</p>
            {/* {props.owner === 'Independent' && <p>Please adopt me</p> } */}
        </div>
    )
}
