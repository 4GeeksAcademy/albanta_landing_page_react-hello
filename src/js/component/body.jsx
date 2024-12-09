import React from "react";

const DeveloperDescription = ({tipoViaje}) => {
	return (<>
	<div className="principal_developer_description">
		<span className="principal_developer_description_name">{tipoViaje}</span>
	</div>
	</>)
}

const DeveloperCard = ({tipoViaje}) => {
	return (<>
		<div className="principal_developer_card">
			<img src="https://thumbs.dreamstime.com/z/esquema-lineal-de-l%C3%ADnea-delgada-del-icono-color-avi%C3%B3n-signo-simple-logotipo-193870116.jpg?w=768"/>
			<DeveloperDescription tipoViaje={tipoViaje} />
		</div>
	
	</>);
}


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