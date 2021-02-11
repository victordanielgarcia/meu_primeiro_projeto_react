  
import React from "react";

import { Card } from 'react-bootstrap';

export default function CatalogoCard(props) {

    const { Imagem, Titulo, Resumo, Categoria } = props;

    return (
        <Card className="text-center">
            <Card.Img variant="top" src={Imagem} />
            <Card.Body>
                <Card.Title>
                    {Titulo}
                </Card.Title>
                <Card.Text>
                    {Categoria}
                </Card.Text>
            </Card.Body>
        </Card>
      )
  }