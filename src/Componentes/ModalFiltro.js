import React from "react";

import { Button, Modal, Form, Col } from 'react-bootstrap';

export default function ModalFiltro(props) {

    const { showHideFiltro, setShowHideFiltro, setSearchCategoria, setSearchAno, setSearchInicioAno, setSearchFimAno, SearchCategoria } = props

    function handleClose() {
        setShowHideFiltro({ show: false });
    }

    function Categoria(){
        var Categoria = document.getElementById('Categoria').value;
            setSearchCategoria(Categoria)
    }

    function Ano(){
        var Ano = document.getElementById('Ano').value
            setSearchAno(Ano)
    }

    function Limpar(){
        setSearchCategoria("")
        setSearchAno("")
        setSearchInicioAno("")
        setSearchFimAno("")
    }

    function RangePorAno(){
        var InicioAno = document.getElementById('inicio').value
        var FimAno = document.getElementById('fim').value
        
        setSearchInicioAno(InicioAno)
        setSearchFimAno(FimAno)
    }

    return (
        <div>
            <Modal show={showHideFiltro.show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p>Filtrar</p>
                        
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <b>
                        Filtros Aplicados: <br></br>
                        Categoria: {SearchCategoria} <br></br><br></br>
                    </b>
                <Form.Label><b>Filtrar por Data</b></Form.Label>
                <Form.Row>
                    
                        <Col>
                            
                            <Form.Group className="text-left" controlId="exampleForm.ControlInput1">
                                
                                <Form.Label>Dia: </Form.Label>
                                <Form.Control size="sm" as="select">
                                    <option>Selecione um Dia</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="text-left" controlId="exampleForm.ControlInput1">
                                <Form.Label>Mes</Form.Label>
                                <Form.Control size="sm" as="select" id >
                                    <option>Selecione um Mes</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                        <Form.Group className="text-left" controlId="exampleForm.ControlInput1">
                                <Form.Label>Ano</Form.Label>
                                <Form.Control size="sm" id="Ano" as="select" >
                                    <option value="">Selecione um Ano</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>

                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Label><b>Filtrar por Categoria</b></Form.Label>
                <Form.Row>
                    
                        <Col>
                            
                            <Form.Group className="text-left" controlId="exampleForm.ControlInput1">
                                
                                <Form.Label>Categoria: </Form.Label>
                                <Form.Control size="sm" id="Categoria" as="select" selected={Categoria}>
                                    <option value="">Selecione uma Categoria</option>
                                    <option value="Ação">Ação</option>
                                    <option value="Terror">Terror</option>
                                    <option value="Aventura">Aventura</option>
                                    <option value="Esporte">Esporte</option>
                                    <option value="Terror">Sobrevivencia</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        
                        
                    </Form.Row>
                    <Form.Label><b>Filtrar por Range</b></Form.Label>
                    <Form.Row>
                    <Col>
                            <Form.Group className="text-left" controlId="exampleForm.ControlInput1">
                                <Form.Label>Ano Inicial </Form.Label>
                                <Form.Control size="sm" as="select" id="inicio">
                                    <option value="">Selecione um Ano</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>

                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="text-left" controlId="exampleForm.ControlInput1">
                                <Form.Label>Ano Final: </Form.Label>
                                <Form.Control size="sm" as="select" id="fim">
                                    <option value="">Selecione um Ano</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>

                                </Form.Control>
                            </Form.Group>
                        </Col>
                        </Form.Row>
                    
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => { handleClose() || Categoria() || Ano() || RangePorAno()}}>Aplicar Filtro</Button>
                    <Button variant="warning" onClick={() => { Limpar() }}>Limpar Filtro</Button>
                    <Button variant="secondary" onClick={() => { handleClose() }}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}