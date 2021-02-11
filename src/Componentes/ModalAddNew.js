import React from "react";

import { Button, Modal, Form, Col } from 'react-bootstrap';


export default function ModalAddNew(props) {

    const { showHideAddNew, 
            setShowHideAddNew, 
            NewCatalogoDataBase, 
            setNewCatalogoDataBase } = props

    function handleClose() { setShowHideAddNew({ show: false });}

    function AddNew() {
        var ID = NewCatalogoDataBase.length + 1;
        var Titulo = document.getElementById('Titulo').value;
        var Categoria = document.getElementById('Categoria').value;
        var DataLançamento = document.getElementById('DataLançamento').value;
        var Resumo = document.getElementById('Resumo').value;
        var Descrição = document.getElementById('Descrição').value;

        if (Titulo === "") {
            alert("Preencha o Titulo")
            setShowHideAddNew({ show: true })

        }
        if (DataLançamento === "") {
            alert("Preencha a Data de Lançamento")
            setShowHideAddNew({ show: true })

        }
        if (Resumo === "") {
            alert("Preencha o Resumo")
            setShowHideAddNew({ show: true })

        }
        if (Descrição === "") {
            alert("Preencha a Descrição")
            setShowHideAddNew({ show: true })

        }
        else {
            const newGame = {
                ID: ID,
                Imagem: "https://i0.wp.com/www.institutoniemeyer.org/wp-content/uploads/2018/09/teste.png",
                Titulo: Titulo,
                Categoria: Categoria,
                DataLançamento: DataLançamento,
                Resumo: Resumo,
                Descrição: Descrição
            }
            setNewCatalogoDataBase([...NewCatalogoDataBase, newGame]);
        }
    }

    return (
        <div>
            <Modal show={showHideAddNew.show} onHide={handleClose} size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>
                        Adicionar Novo Jogo
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Row>
                        <Col>
                            <Form.Group className="text-left" controlId="exampleForm.ControlInput1">
                                <Form.Label>Titulo: </Form.Label>
                                <Form.Control id="Titulo" className="text-left" type="text" placeholder="Digite o Titulo.." />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="text-left" controlId="exampleForm.ControlSelect1">
                                <Form.Label>Categoria: </Form.Label>
                                <Form.Control id="Categoria" as="select">
                                    <option>Acao</option>
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
                                <Form.Label>Data de Lançamento: </Form.Label>
                                <Form.Control id="DataLançamento" type="date" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.File id="formcheck-api-regular">
                                <Form.File.Label>Escolher Imagem de Exibição</Form.File.Label>
                                <Form.File.Input id="file" />
                            </Form.File>
                        </Col>
                    </Form.Row>
                    <Form.Group className="text-left" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Resumo: </Form.Label>
                        <Form.Control id="Resumo" className="text-left" as="textarea" rows={2} placeholder="Digite o Resumo..."/>
                    </Form.Group>

                    <Form.Group className="text-left" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descrição: </Form.Label>
                        <Form.Control id="Descrição" className="text-left" as="textarea" rows={4} placeholder="Digite a Descrição ..."/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => handleClose() || AddNew()}> Confirmar Adição</Button>
                    <Button variant="secondary" onClick={() => { handleClose() }}> Fechar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}