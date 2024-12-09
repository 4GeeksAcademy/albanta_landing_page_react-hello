import React from "react";

const DeveloperDescription = ({tipoViaje}) => {
	return (<>
	<div className="principal_developer_description">
		<span className="principal_developer_description_name">{tipoViaje}</span>
	</div>
	</>)
}


export default DeveloperDescription;