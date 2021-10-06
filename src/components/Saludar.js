import React from 'react';

export default function Saludar(props){
	console.log(props.userInfo.name);
	console.log(props.userInfo.edad);
	console.log(props.userInfo.color);

	return(
		<div>
			<p>Hola {props.userInfo.name}.</p>
			<p>Tenés {props.userInfo.edad} años.</p>
			<p>Te gusta el color {props.userInfo}.</p>
		</div>
	)
}
