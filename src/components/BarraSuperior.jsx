import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, Outlet } from "react-router-dom";

function BarraSuperior() {
	return ( 
		<>
			<Navbar bg="primary" expand="lg">
				<Container>
					<Navbar.Brand as={ Link } to='/' >Tutorías</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={ Link } to='/'>Inicio</Nav.Link>
							<NavDropdown title="Alumnos" id="basic-nav-dropdown">
								<NavDropdown.Item as= { Link } to ='alumnos'>Alumnos</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='alumnos/agregar'>Agregar</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='alumnos/eliminar'>Eliminar</NavDropdown.Item>
								<NavDropdown.Item as= { Link } to ='alumnos/modificar'>Modificar</NavDropdown.Item>

							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<div>
				<Outlet></Outlet>
			</div>
		</>
	 );
}

export default BarraSuperior;