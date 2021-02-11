import React from "react";

import { Button, Modal } from 'react-bootstrap';

export default function ModalRemove(props) {

    const { setMaisDetalhes, 
            showHideRemove, 
            setShowHideRemove, 
            NewCatalogoDataBase, 
            setNewCatalogoDataBase } = props

    function handleClose() {
        setShowHideRemove({ show: false });
    }

    function DeletarItem() {
        setNewCatalogoDataBase(NewCatalogoDataBase.filter((item) =>
            item.ID !== showHideRemove.ID
        ))
        setMaisDetalhes(false);
        setShowHideRemove({ show: false })
    }

    return (
        <div>
            <Modal show={showHideRemove.show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p>[{showHideRemove.ID}] Módulo de Exclusão</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Voce tem certeza de que quer excluir {showHideRemove.Titulo}?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={() => DeletarItem(showHideRemove.ID)}>Confirmar Exclusão</Button>
                    <Button variant="secondary" onClick={() => { handleClose() }}>Fechar</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}