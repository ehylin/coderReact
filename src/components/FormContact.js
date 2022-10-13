import { Button, Container, Form } from 'react-bootstrap'

function FormContact() {
    return (
        <Container >
            <Form className='mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese un correo" />
                    <Form.Text className="text-muted">
                        Para gestionar su solicitud, debe ingresar un correo.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Su comentario</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </Container>
    );
}

export default FormContact;