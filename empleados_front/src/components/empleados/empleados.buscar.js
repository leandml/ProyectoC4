import React from 'react';
import { Container } from 'react-bootstrap';

export default class EmpleadosBuscar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Container>
                <h1 style={{marginTop: 200}}>
                    Empleados Buscar
                </h1>
            </Container>
        );
    }
}
 
