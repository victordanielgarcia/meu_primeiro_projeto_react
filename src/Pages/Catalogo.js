import React, { useState } from "react";

import { Container, Table, CardColumns, Button } from 'react-bootstrap';

import { VscTriangleUp, VscTriangleDown, VscCircleFilled } from 'react-icons/vsc'

import "../Styles/Catalogo.css"

import CatalogoDataBase from "../Date/CatalogoDataBase"
import CatalogoTable from "../Componentes/CatalogoTable"
import CatalogoSearch from "../Componentes/CatalogoSearch"
import Navegação from "../Componentes/Navegação"
import ModalAddNew from "../Componentes/ModalAddNew"
import ModalFiltro from "../Componentes/ModalFiltro"
import CatalogoCard from "../Componentes/CatalogoCard"

export default function Catalogo() {

    const [NewCatalogoDataBase, setNewCatalogoDataBase] = useState(CatalogoDataBase.map((cat) => {
        return {
            ID: cat.ID,
            Imagem: cat.Imagem,
            Titulo: cat.Titulo,
            Categoria: cat.Categoria,
            DataLançamento: cat.DataLançamento,
            Resumo: cat.Resumo,
            Descrição: cat.Descrição,
            Active: true
        }
    })); 

    const [ SearchCatalogo, setSearchCatalogo ] = useState("");
    const [ SearchCategoria, setSearchCategoria ] = useState("");
    const [ SearchAno, setSearchAno ] = useState("");

    const [ ChangeCard, setChangeCard ] = useState(false);
    const [ ChangeTable, setChangeTable ] = useState(true);

    const [ showHideAddNew, setShowHideAddNew ] = useState(false);
    const [ showHideFiltro, setShowHideFiltro ] = useState(false);

    const [ OrdenaçãoData, setOrdenaçãoData ] = useState(0);
    const [ OrdenaçãoID, setOrdenaçãoID ] = useState(0);
    const [ OrdenaçãoTitulo, setOrdenaçãoTitulo ] = useState(0);
    const [ OrdenaçãoCategoria, setOrdenaçãoCategoria ] = useState(0);

    const [ SearchInicioAno,  setSearchInicioAno] = useState("");
    const [ SearchFimAno, setSearchFimAno] = useState("");

    function OrdenaçãoPorData(indice) { setOrdenaçãoData(indice);}
    function OrdenaçãoPorID(indice) { setOrdenaçãoID(indice);}
    function OrdenaçãoPorTitulo(indice) { setOrdenaçãoTitulo(indice);}
    function OrdenaçãoPorCategoria(indice) { setOrdenaçãoCategoria(indice); }

    function AddNewModal() { setShowHideAddNew({ show: true }); }
    function FiltroModal() { setShowHideFiltro({ show: true }); }

    function ModificarItem(ID, Titulo, Categoria, DataLançamento, Resumo, Descrição) {
        setNewCatalogoDataBase(NewCatalogoDataBase.map((item) => {
            if (item.ID === ID) {
                return {
                    ID: item.ID,
                    Imagem: item.Imagem,
                    Titulo: Titulo,
                    Categoria: Categoria,
                    DataLançamento: DataLançamento,
                    Resumo: Resumo,
                    Descrição: Descrição
                }
            } else { return item }
        }))
    }
    function DeleteAll() {
        setNewCatalogoDataBase(NewCatalogoDataBase.filter((item) => (
            item.Active
        )))
    }
    function Marcar() {
        setNewCatalogoDataBase(NewCatalogoDataBase.map((item) => {
            
            if (NewCatalogoDataBase.filter((check) => (
                check.Active === true)).length > 0) {
                return { ...item, Active: false }
            } else { return item }
        }))
    }
    function Desmarcar(){
        setNewCatalogoDataBase(NewCatalogoDataBase.map((item) => {
            if (NewCatalogoDataBase.filter((check) => (
                check.Active === false)).length > 0) {
                return { ...item, Active: true }
            }else{ return item }
        }))
    }

    return (
        <div>
            <Navegação
                setChangeCard={setChangeCard}
                setChangeTable={setChangeTable}
                AddNewModal={AddNewModal}
                FiltroModal={FiltroModal}
            />
            <ModalAddNew
                showHideAddNew={showHideAddNew}
                setShowHideAddNew={setShowHideAddNew}
                NewCatalogoDataBase={NewCatalogoDataBase}
                setNewCatalogoDataBase={setNewCatalogoDataBase}
            />
            <ModalFiltro
                showHideFiltro={showHideFiltro}
                setShowHideFiltro={setShowHideFiltro}
                setSearchCategoria={setSearchCategoria}
                setSearchAno={setSearchAno}
                SearchCategoria={SearchCategoria}
                setSearchInicioAno={setSearchInicioAno}
                setSearchFimAno={setSearchFimAno}

            />
            <CatalogoSearch
                SearchCatalogo={SearchCatalogo}
                setSearchCatalogo={setSearchCatalogo}
            />
            {
                ChangeTable &&
                <Container>
                    <div className="text-center bt">
                        <Button 
                            onClick={() => { Marcar() }}>
                                Marcar Todos
                        </Button>
                        <Button 
                            onClick={() => { Desmarcar() }}> 
                                Desmarcar Todos
                        </Button>
                        <Button 
                            onClick={() => { DeleteAll() }} variant="danger"> 
                                Excluir
                        </Button>
                    </div>                        
                    <Table>
                        <thead>
                            <tr>
                                <th></th>
                                <th> ID
                                {
                                    OrdenaçãoID === 0 ?
                                    <VscCircleFilled
                                        className="text-danger" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { OrdenaçãoPorID(1) }} /> 
                                    :
                                    OrdenaçãoID === 1 ?
                                    <VscTriangleUp
                                        className="text-primary" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { OrdenaçãoPorID(2) }} />
                                    :
                                    <VscTriangleDown
                                        className="text-primary" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { OrdenaçãoPorID(0) }} />
                                }
                                </th>
                                <th> Imagem </th>
                                <th> Titulo
                                {
                                    OrdenaçãoTitulo === 0 ?
                                    <VscCircleFilled
                                        className="text-danger" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { OrdenaçãoPorTitulo(1) }} /> 
                                    :
                                    OrdenaçãoTitulo === 1 ?
                                    <VscTriangleUp
                                        className="text-primary" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { OrdenaçãoPorTitulo(2) }} />
                                    :
                                    <VscTriangleDown
                                        className="text-primary" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { OrdenaçãoPorTitulo(0) }} />
                                }
                                </th>
                                <th> Categoria 
                                {
                                    OrdenaçãoCategoria === 0 ?
                                    <VscCircleFilled
                                        className="text-danger" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { OrdenaçãoPorCategoria(1) }} /> 
                                    :
                                    OrdenaçãoCategoria === 1 ?
                                    <VscTriangleUp 
                                        className="text-primary" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { OrdenaçãoPorCategoria(2) }} />
                                    :
                                    <VscTriangleDown
                                        className="text-primary" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { OrdenaçãoPorCategoria(0) }} />
                                }
                                </th>
                                <th> Data
                                    {
                                    OrdenaçãoData === 0 ?
                                    <VscCircleFilled
                                        className="text-danger" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { OrdenaçãoPorData(1) }} /> 
                                        :
                                    OrdenaçãoData === 1 ?
                                    <VscTriangleUp
                                        className="text-primary" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { OrdenaçãoPorData(2) }} />
                                    :
                                    <VscTriangleDown
                                        className="text-primary" 
                                        style={{ cursor: "pointer" }} 
                                        onClick={() => { OrdenaçãoPorData(0) }} />
                                    }
                                </th>
                                <th> Ação </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                 NewCatalogoDataBase.sort(
                                    function Titulo(itemA, itemB) {
                                        var TituloA = itemA.Titulo.toUpperCase(), TituloB = itemB.Titulo.toUpperCase();
                                        if ( OrdenaçãoTitulo === 1 || TituloA < TituloB) { return -1 } 
                                        if ( OrdenaçãoTitulo === 2 || TituloA > TituloB) { return 1 }
                                        else { return 0 }
                                    }
                                )
                                .sort(
                                    (itemA, ItemB) => {
                                        if ( OrdenaçãoID === 1) { return itemA.ID - ItemB.ID } 
                                        if ( OrdenaçãoID === 2) { return ItemB.ID - itemA.ID }
                                        return 0
                                    }
                                )
                                .sort(
                                    (itemA, ItemB) => {
                                        if ( OrdenaçãoData === 1) { return itemA.DataLançamento - ItemB.DataLançamento } 
                                        if ( OrdenaçãoData === 2) { return ItemB.DataLançamento - itemA.DataLançamento }
                                        return 0
                                    }
                                )
                                .filter(function RangePorAno(a) {
                                    var Ano = parseInt(a.DataLançamento)
                                    if (SearchFimAno === "" && SearchInicioAno !== "") {
                                        return Ano === parseInt(SearchInicioAno )
                                    } if (SearchFimAno !== "" && SearchFimAno !== "") {
                                        return Ano >= parseInt(SearchInicioAno) && Ano <= parseInt(SearchFimAno)
                                    }
                                    return -1
                                })
                                .filter((a) =>
                                a.Titulo.toUpperCase().indexOf(SearchCatalogo.toUpperCase()) !== -1 ||
                                a.Categoria.toUpperCase().indexOf(SearchCatalogo.toUpperCase()) !== -1 ||
                                a.DataLançamento.toUpperCase().indexOf(SearchCatalogo.toUpperCase()) !== -1)
                                .filter((a) =>
                                a.Categoria.toUpperCase().indexOf(SearchCategoria.toUpperCase()) !== -1)
                                .filter((a) =>
                                a.DataLançamento.toUpperCase().indexOf(SearchAno.toUpperCase()) !== -1)
                                .map((item, index) =>
                                    <CatalogoTable
                                        NewCatalogoDataBase={NewCatalogoDataBase}
                                        setNewCatalogoDataBase={setNewCatalogoDataBase}
                                        ModificarItem={ModificarItem}
                                        index={index}
                                        Active={item.Active}
                                        ID={item.ID}
                                        Imagem={item.Imagem}
                                        Titulo={item.Titulo}
                                        Categoria={item.Categoria}
                                        DataLançamento={item.DataLançamento}
                                        Resumo={item.Resumo}
                                        Descrição={item.Descrição}
                                    />)
                            }
                        </tbody>
                    </Table>
                </Container>
            }
            {
                ChangeCard &&
                <Container className="my-3">
                    <CardColumns>
                        {
                            NewCatalogoDataBase.filter((a) =>
                                a.Titulo.toUpperCase().indexOf(SearchCatalogo.toUpperCase()) !== -1 ||
                                a.Categoria.toUpperCase().indexOf(SearchCatalogo.toUpperCase()) !== -1 ||
                                a.DataLançamento.toUpperCase().indexOf(SearchCatalogo.toUpperCase()) !== -1)
                                .filter((a) =>
                                a.Categoria.toUpperCase().indexOf(SearchCategoria.toUpperCase()) !== -1)
                                .filter((a) =>
                                a.DataLançamento.toUpperCase().indexOf(SearchAno.toUpperCase()) !== -1)
                                .map((item, index) =>
                                    <CatalogoCard
                                        Index={index}
                                        ID={item.ID}
                                        Imagem={item.Imagem}
                                        Titulo={item.Titulo}
                                        Categoria={item.Categoria}
                                        DataLançamento={item.DataLançamento}
                                        Resumo={item.Resumo}
                                        Descrição={item.Descrição}
                                    />)
                        }
                    </CardColumns>
                </Container >
            }
        </div>
    )
}