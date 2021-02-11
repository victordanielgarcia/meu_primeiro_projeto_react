import React from "react";

import { Nav } from 'react-bootstrap';

import { GrAddCircle, GrFilter } from "react-icons/gr";

export default function Navegação(props) {

    const { setChangeCard, setChangeTable, FiltroModal, AddNewModal } = props
  
    return (
        <div class="card-header" style={{ marginBottom: '20px' }}>
            <Nav class="nav nav-tabs card-header-tabs d-flex justify-content-center" variant="tabs" defaultActiveKey="Tabela">
                <Nav.Item>
                    <Nav.Link
                        onClick={() => 
                            AddNewModal()}>
                        <GrAddCircle/>
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        onClick={() => 
                            FiltroModal()}>
                            <GrFilter/>
                    </Nav.Link>
                    </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                    eventKey="Catalogo" 
                    onClick={() => {
                        setChangeCard(true) || 
                        setChangeTable(false) }}>
                            Catalogo
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link 
                    eventKey="Table" 
                    onClick={()=> {
                        setChangeTable(true) || 
                        setChangeCard(false) }}>
                            Tabela
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Login">
                        Login
                    </Nav.Link>
                </Nav.Item>
            </Nav>   
        </div>
    )
}