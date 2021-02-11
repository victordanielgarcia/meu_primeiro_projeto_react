import React, { useState, useEffect } from "react";

import { Button, Modal, Form, Col } from 'react-bootstrap';

export default function ModalModificar(props) {

    const { showHideModificar, setShowHideModificar, ModificarItem } = props

    const [ID, setID] = useState("");
    const [Titulo, setTitulo] = useState("");
    const [Categoria, setCategoria] = useState("");
    const [DataLançamento, setDataLançamento] = useState("");
    const [Resumo, setResumo] = useState("");
    const [Descrição, setDescrição] = useState("");

    function handleClose() {
        setShowHideModificar({ show: false });
    }

    useEffect(() => {
        setID(showHideModificar.ID);
        setTitulo(showHideModificar.Titulo);
        setCategoria(showHideModificar.Categoria);
        setDataLançamento(showHideModificar.DataLançamento);
        setResumo(showHideModificar.Resumo);
        setDescrição(showHideModificar.Descrição);
    }, [showHideModificar])

    return (
        <div >
            <Modal show={showHideModificar.show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        [{ID}] Modulo de Modificação: {Titulo}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Row>
                        <Col>
                            <Form.Group className="text-left" controlId="exampleForm.ControlInput1">
                                <Form.Label>Titulo: </Form.Label>
                                <Form.Control className="text-left" type="text" placeholder={Titulo}
                                    value={Titulo}
                                    onChange={(e) => setTitulo(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="text-left" controlId="exampleForm.ControlSelect1">
                                <Form.Label>Categoria: </Form.Label>
                                <Form.Control as="select" defaultValue={Categoria}
                                    value={Categoria}
                                    onChange={(e) => { setCategoria(e.target.value) }}>
                                    <option>Aventura</option>
                                    <option>Drama</option>
                                    <option>Comedia</option>
                                    <option>Animacao</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group className="text-left" controlId="exampleForm.ControlSelect2">
                                <Form.Label>
                                    Ano de Lançamento:
                            </Form.Label>
                                <Form.Control type="text" defaultValue={DataLançamento}
                                    value={DataLançamento}
                                    onChange={(e) => { setDataLançamento(e.target.value) }} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label>
                                    Escolher Imagem de Exibição
                            </Form.File.Label>
                                <Form.File.Input />
                            </Form.File>
                        </Col>
                    </Form.Row>
                    <Form.Group className="text-left" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Resumo: </Form.Label>
                        <Form.Control className="text-left" as="textarea" rows={2}
                            value={Resumo}
                            onChange={(e) => { setResumo(e.target.value) }}>
                            {Resumo}
                        </Form.Control>.

                    </Form.Group>
                    <Form.Group className="text-left" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descrição: </Form.Label>
                        <Form.Control className="text-left" as="textarea" rows={4}
                            value={Descrição}
                            onChange={(e) => { setDescrição(e.target.value) }}>
                            {Descrição}
                        </Form.Control>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => { handleClose() ||
                        ModificarItem(ID,
                            Titulo,
                            Categoria,
                            DataLançamento,
                            Resumo,
                            Descrição)
                    }}> Confirmar Modificação</Button>
                    <Button variant="secondary" onClick={() => { handleClose() }}> Fechar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}