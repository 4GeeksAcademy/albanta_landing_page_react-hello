import React from "react";
import DeveloperCard from "./DeveloperCard.jsx"


const Body = () => {
	return (<>
		<div className="principal_body">
			<h2>Una nueva forma de viajar con guías interactivos</h2>
			<h3>TUS VIAJES PERSONALIZADOS</h3>
			<p>Atrévete a viajar libre con un guía que te asesorará en todo momento, con solo abrir tu dispositivo tu guía completa, paso a paso</p>
			<div>
				<DeveloperCard tipoViaje='VIAJES ESPAÑA' />
				<DeveloperCard tipoViaje='VIAJES EUROPA' />
				<DeveloperCard tipoViaje='VIAJES MUNDO' />
			</div>
		</div>
	</>);
}

export default Body;