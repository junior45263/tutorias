import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import { useState } from "react";
import axios from 'axios';

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

function AlumnoAgregar() {

  const [alumno, setAlumno] = useState(initialState);
  const { matricula, aPaterno, aMaterno, nombre, sexo, dCalle, dNumero, dColonia, dCodigoPostal, aTelefono, aCorreo, aFacebook, aInstagram } = alumno;
  
  const handleInputChange = (e) => {
      let { name, value } = e.target;
      setAlumno({...alumno, [name]:value});
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    addAlumno(alumno);
  }
  const addAlumno = async (data) => {
    const response = await axios.post("http://localhost:5000/alumno/agregar", data);
    if(response.status === 200) {
      console.log(response.data);
    }
  }
  

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Alumno agregar</h1>
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
                  value={ matricula }
                  onChange = { handleInputChange }
                  required
                />
              </FloatingLabel>
            </Col>

            <Col>
              <Form.Control
                name="nombre"
                type="text"
                placeholder="Ingresa nombre"
                value = { nombre }
                onChange = { handleInputChange }
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
                value={ aPaterno }
                onChange = { handleInputChange }
              />
            </Col>

            <Col>
              <Form.Control
                name="aMaterno"
                type="text"
                placeholder="Ingresa Apellido materno"
                value={ aMaterno }
                onChange = { handleInputChange }
              />
            </Col>
          </Row>

          <Row className="mt-3 mb-3">
            <Col>
              <Form.Select
                name="sexo"
                aria-label="Default select example"
                value={ sexo }
                onChange = { handleInputChange }
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
                value={ aTelefono }
                onChange = { handleInputChange }
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
                value={ aCorreo }
                onChange = { handleInputChange }
                required
              />
            </Col>

            <Col>
              <Form.Control
                name="aFacebook"
                type="text"
                placeholder="Ingresa perfil Facebook"
                value={ aFacebook }
                onChange = { handleInputChange }
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
                value={ aInstagram }
                onChange = { handleInputChange }
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
                value={ dCalle }
                onChange = { handleInputChange }
                required
              />
            </Col>

            <Col>
              <Form.Control
                name="dNumero"
                type="number"
                placeholder="Ingresa el numero"
                value={ dNumero }
                onChange = { handleInputChange }
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
                value={ dColonia }
                onChange = { handleInputChange }
                required
              />
            </Col>

            <Col>
              <Form.Control
                name="dCodigoPostal"
                type="number"
                placeholder="Ingresa el código postal"
                value={ dCodigoPostal }
                onChange = { handleInputChange }
                required
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button type="submit" className="btn btn-primary">
                Guardar
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

export default AlumnoAgregar;
