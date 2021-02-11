import React, { useState } from "react";

import "../Styles/CatalogoTable.css"


import {
    GrCheckbox,
    GrCheckboxSelected
} from 'react-icons/gr'

import ModalModificar from "./ModalModificar"

import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import ModalRemove from "../Componentes/ModalRemove"

export default function CatalogoTable(props) {

    const { ModificarItem, 
            NewCatalogoDataBase, 
            setNewCatalogoDataBase,
            Active,
            ID, 
            Imagem, 
            Titulo, 
            Categoria, 
            DataLançamento, 
            Resumo, 
            Descrição } = props;

    const [ showHideModificar, setShowHideModificar ] = useState(false);
    const [ showHideRemove, setShowHideRemove ] = useState(false);

    const [ MaisDetalhes, setMaisDetalhes ] = useState(false);

    function RemoveModal(ID, Titulo) {
        setShowHideRemove({
            ID: ID,
            Titulo: Titulo,
            show: true
        });
    }

    function ChecarItem(id) {
        setNewCatalogoDataBase(NewCatalogoDataBase.map((item) => {
            if (id === item.ID) {
                return {
                    ...item, Active: !Active
                }
            } else {
                return item
            }
        }))
    }

    return (
        <>
            <ModalModificar
                showHideModificar={showHideModificar}
                setShowHideModificar={setShowHideModificar}
                ModificarItem={ModificarItem}
            />
            <ModalRemove
                setMaisDetalhes={setMaisDetalhes}
                showHideRemove={showHideRemove}
                setShowHideRemove={setShowHideRemove}
                NewCatalogoDataBase={NewCatalogoDataBase}
                setNewCatalogoDataBase={setNewCatalogoDataBase}
            />
            <tr>

            <td className="text-center">{
                    Active ?
                        <GrCheckbox style={{ cursor: "pointer" }} className="text-primary" onClick={() => { ChecarItem(ID) }} /> :
                        <GrCheckboxSelected style={{ cursor: "pointer" }} onClick={() => { ChecarItem(ID) }} />
                }</td>
                <td> {ID} </td>
                <td>
                    <img className="Tableimg" src={Imagem} alt="" />
                </td>
                <td> {Titulo} </td>
                <td> {Categoria} </td>
                <td> {DataLançamento} </td>
                <td>
                    <Button onClick={() => { setMaisDetalhes(!MaisDetalhes) }}>
                        Detalhes
                    </Button>
                </td>
            </tr>
            {
                MaisDetalhes &&
                <tr>
                    <td colSpan="7">
                        <ul>
                            <li>{Titulo}</li>
                            <li>{Categoria}</li>
                            <li>{DataLançamento}</li>
                            <li>{Resumo}</li>
                            <li>{Descrição}</li>
                        </ul>
                        <Button variant="danger" className="mx-1"
                            onClick={() => RemoveModal(ID, Titulo)}>Deletar</Button>
                        <Button variant="secondary" onClick={() => {
                            setShowHideModificar({
                                show: true,
                                ID: ID,
                                Imagem: Imagem,
                                Titulo: Titulo,
                                Categoria: Categoria,
                                DataLançamento: DataLançamento,
                                Resumo: Resumo,
                                Descrição: Descrição,
                            })
                        }}>Editar</Button>
                    </td>
                </tr>
            }
        </>
    )
}