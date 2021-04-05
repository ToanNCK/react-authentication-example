import React, { useState } from 'react';
import { Alert, Table, Pagination, Button, Modal, Row, Col } from 'react-bootstrap';

class ComponentsView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            alerts: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
            thead: ['#', 'First Name', 'Last Name', 'Username'],
            tbody: [
                { id: 1, firstName: 'Mark', lastName: 'Otto', userName: '@mdo' },
                { id: 2, firstName: 'Jacob', lastName: 'Thornton', userName: '@fat' },
                { id: 3, firstName: 'Larry the Bird', lastName: '', userName: '@twitter', colSpan: '2' }
            ],
            showModal: false
        };
    }

    render() {
        const data = this.state.alerts;
        const theads = this.state.thead;
        const tbodys = this.state.tbody;
        const handleClose = () => this.setState({ showModal: false });
        const handleShow = () => this.setState({ showModal: true });
        return (
            <div>
                {
                    data &&
                    data.map((variant, idx) => (
                        <Alert key={idx} variant={variant}>
                            This is a {variant} alert—check it out!
                        </Alert>
                    ))

                }

                <Table striped bordered hover size="sm" className="mt-5">
                    <thead>
                        <tr>
                            {
                                theads &&
                                theads.map(thead => (
                                    <th key={thead}>{thead}</th>
                                ))
                            }

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tbodys &&
                            tbodys.map(tbody => (
                                <tr key={tbody.id}>
                                    <td>{tbody.id}</td>
                                    <td>{tbody.firstName}</td>
                                    <td>{tbody.lastName}</td>
                                    <td colSpan={tbody.colSpan ? tbody.colSpan : ""}>{tbody.userName}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                <Row>
                    <Col>
                        <Pagination size="sm" className="float-right">
                            <Pagination.First />
                            <Pagination.Prev />
                            <Pagination.Item>{1}</Pagination.Item>
                            <Pagination.Ellipsis />

                            <Pagination.Item>{10}</Pagination.Item>
                            <Pagination.Item>{11}</Pagination.Item>
                            <Pagination.Item active>{12}</Pagination.Item>
                            <Pagination.Item>{13}</Pagination.Item>
                            <Pagination.Item disabled>{14}</Pagination.Item>

                            <Pagination.Ellipsis />
                            <Pagination.Item>{20}</Pagination.Item>
                            <Pagination.Next />
                            <Pagination.Last />
                        </Pagination>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="primary" onClick={handleShow}>Launch demo modal</Button>
                    </Col>
                </Row>
                <Modal show={this.state.showModal} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export { ComponentsView };