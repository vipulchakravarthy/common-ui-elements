import React from 'react';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { colors } from '../../constants/constants';

const ReactBootstrapButton: React.FC = () => {

    const [buttonColor, setButtonColor] = React.useState<string>("success")

    return (
        <div>
            <Form>
                <Form.Group>
                <Row>
                <Col md={3}>
                <Form.Control as="select" onChange={(e) => {setButtonColor(e.target.value)}}>
                    <option>Choose one color</option>
                    {colors.map((color, index) => {
                        return (
                            <option key={index} value={color}>{color}</option>
                        )
                    })}
                </Form.Control>
                </Col>
                <Col>
                <Button variant={buttonColor}>Button name here</Button>
                </Col>
            </Row>
                </Form.Group>
            </Form>
        </div>
    )
}

export default ReactBootstrapButton;