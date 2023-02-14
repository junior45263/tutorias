import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import axios from 'axios';
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const initialState = {
	matricula:'',
	aPaterno:'',
	aMaterno:'',
	nombre:'',
	sexo:'',
	dCalle:'',
	dNumero:'',
	dColonia:'',
	dCodigoPostal:'',
	aTelefono:'',
	aCorreo:'',
	aFacebook:'',
	aInstagram:'',
  }

function AlumnoEliminar() {
	const [alumno, setAlumno] = useState(initialState);
  	const { matricula, aPaterno, aMaterno, nombre, sexo, dCalle, dNumero, dColonia, dCodigoPostal, aTelefono, aCorreo, aFacebook, aInstagram } = alumno;

	const { m } = useParams();

  useEffect(()=>{
    if(m) {
      getAlumno(m);
    }
  },[]);

  const getAlumno = async (m) =>{
    const response = await axios.get(`http://127.0.0.1:5000/alumno/${m}`);
    if(response.status===200) {
      setAlumno(response.data.result[0]);
    }
  };	

	const handleSubmit = (event) => {
	  event.preventDefault();
	  deleteAlumno(alumno);
	}
	const deleteAlumno = async (data) => {
	  const response = await axios.post("http://localhost:5000/alumno/eliminar", data);
	  if(response.status === 200) {
		console.log(response.data);
	  }
	}
	return ( 
		<>
		<Container>
        <Row>
          <Col>
            <h1>Alumno Eliminar</h1>
          </Col>
        </Row>

        <Form onSubmit={ handleSubmit }>
          <Row>
            <Col>
              <p className="fs-3">Datos generales</p>
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <FloatingLabel label="Matricula">
                <Form.Control
                  name="matricula"
                  type="text"
                  placeholder="Ingresa la matricula"
                  defaultValue={ matricula }
                  required
				  disabled
                />
              </FloatingLabel>
            </Col>

            <Col>
              <Form.Control
                name="nombre"
                type="text"
                placeholder="Ingresa nombre"
                defaultValue = { nombre }
                required
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Control
                name="aPaterno"
                type="text"
                placeholder="Ingresa Apellido paterno"
                defaultValue={ aPaterno }
              />
            </Col>

            <Col>
              <Form.Control
                name="aMaterno"
                type="text"
                placeholder="Ingresa Apellido materno"
                defaultValue={ aMaterno }
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Select
                name="sexo"
                aria-label="Default select example"
                defaultValue={ sexo }
                required
              >
                <option>Selecciona tu sexo</option>

                <option value="1">Femenino</option>

                <option value="2">Masculino</option>
              </Form.Select>
            </Col>

            <Col>
              {" "}
              <Form.Control
                name="aTelefono"
                type="text"
                placeholder="Ingresa Telefono (618)1232323"
                pattern="[(][0-9]{3}[)][0-9]{7}"
                defaultValue={ aTelefono }
                required
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Control
                name="aCorreo"
                type="email"
                placeholder="Ingresa Correo electronico"
                defaultValue={ aCorreo }
                required
              />
            </Col>

            <Col>
              <Form.Control
                name="aFacebook"
                type="text"
                placeholder="Ingresa perfil Facebook"
                defaultValue={ aFacebook }
                required
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Control
                name="aInstagram"
                type="text"
                placeholder="Ingresa perfil Instagram"
                defaultValue={ aInstagram }
                required
				/>
				</Col>
	
				<Col></Col>
			  </Row>
	
			  <Row className="mt-3 mb-3">
				<Col>
				  <p className="fs-3">Dirección</p>
				</Col>
			  </Row>
	
			  <Row className="mt-3 mb-3">
				<Col>
				  <Form.Control
					name="dCalle"
					type="text"
					placeholder="Ingresa la calle"
					defaultValue={ dCalle }
					required
				  />
				</Col>
	
				<Col>
				  <Form.Control
					name="dNumero"
					type="number"
					placeholder="Ingresa el numero"
					defaultValue={ dNumero }
					required
				  />
				</Col>
			  </Row>
	
			  <Row className="mt-3 mb-3">
				<Col>
				  <Form.Control
					name="dColonia"
					type="text"
					placeholder="Ingresa la colonia"
					defaultValue={ dColonia }
					required
				  />
				</Col>
	
				<Col>
				  <Form.Control
					name="dCodigoPostal"
					type="number"
					placeholder="Ingresa el código postal"
					defaultValue={ dCodigoPostal }
					required
				  />
				</Col>
			  </Row>
	
			  <Row>
				<Col>
				  <Button type="submit" className="btn btn-danger">
					Eliminar
				  </Button>
				</Col>
	
				<Col>
				  <Button className="btn btn-info">Cancelar</Button>
				</Col>
			  </Row>
	
			  {/* <Row className='mt-3 mb-3'>
	
												   <Col></Col>
	
												   <Col></Col>
	
								   </Row> */}
			</Form>
		  </Container>
			</>
		 );
    
}

export default AlumnoEliminar;