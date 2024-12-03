import React from "react";


const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Grand Voyage
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Viajes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Precios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="#">
                Sobre nosotros
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};


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
			<h3>TU VIAJE PERSONALIZADO</h3>
			<p>Atrévete a viajar libre con un guía que te asesorará en todo momento, con solo abrir tu móvil tu guía completa, paso a paso</p>
			<div>
				<DeveloperCard tipoViaje='VIAJES ESPAÑA' />
				<DeveloperCard tipoViaje='VIAJES EUROPA' />
				<DeveloperCard tipoViaje='VIAJES MUNDO' />
			</div>
		</div>
	</>);
}

const Home = () => {
	return (<>
	<div className= "principal">
		<Navbar />
		<Body />
	</div>
	
	
	</>);
};

export default Home;
