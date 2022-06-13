import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({item, ...props}) => {
    const {store, actions} = useContext(Context)
    return (
    <div className="card unic m-2" style={{minWidth: "250px"}}>
        <img src={`https://starwars-visualguide.com/assets/img/${props.resource === "people" 
						? "characters"
						: props.resource}/${item.uid}.jpg`} className="card-img-top" alt="..."/>
        <div className="card-body pb-2">
            <h5 className="card-title">{item.name}</h5>
            <div className="container-fluid justify-content-between p-0 d-flex">
                <Link type="button" className="btn btn-outline-primary btn-sm" to={`/single/${props.resource}/${item.uid}`}>{"mas detalles"}</Link >
                <button type="button" className="btn btn-outline-warning btn-sm" onClick={(e)=>{
                    actions.addFavorites(item.name)
                }}><i className="fa-regular fa-heart"></i></button>
            </div>
        </div>
    </div>
    );
};

Card.propTypes = {
item: PropTypes.object,
resource: PropTypes.string
}























// import React, { useState, useEffect, useContext } from "react";
// import { Link } from "react-router-dom";

// import { Context } from "../store/appContext";

// import "../../styles/demo.css";

// export const Demo = () => {
// 	const { store, actions } = useContext(Context);

// 	return (
// 		<div className="container">
// 			<ul className="list-group">
// 				{store.demo.map((item, index) => {
// 					return (
// 						<li
// 							key={index}
// 							className="list-group-item d-flex justify-content-between"
// 							style={{ background: item.background }}>
// 							<Link to={"/single/" + index}>
// 								<span>Link to: {item.title}</span>
// 							</Link>
// 							{// Conditional render example
// 							// Check to see if the background is orange, if so, display the message
// 							item.background === "orange" ? (
// 								<p style={{ color: item.initial }}>
// 									Check store/flux.js scroll to the actions to see the code
// 								</p>
// 							) : null}
// 							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
// 								Change Color
// 							</button>
// 						</li>
// 					);
// 				})}
// 			</ul>
// 			<br />
// 			<Link to="/">
// 				<button className="btn btn-primary">Back home</button>
// 			</Link>
// 		</div>
// 	);
// };
