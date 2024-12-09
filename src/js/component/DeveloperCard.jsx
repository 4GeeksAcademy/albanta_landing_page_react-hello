import React from "react";
import DeveloperDescription from "./DeveloperDescription.jsx"

const DeveloperCard = ({tipoViaje}) => {
	return (<>
		<div className="principal_developer_card">
			<img src="https://thumbs.dreamstime.com/z/esquema-lineal-de-l%C3%ADnea-delgada-del-icono-color-avi%C3%B3n-signo-simple-logotipo-193870116.jpg?w=768"/>
			<DeveloperDescription tipoViaje={tipoViaje} />
		</div>
	
	</>);
}

export default DeveloperCard;