import React from "react";

import "../Styles/CatalogoSearch.css"

export default function CatalogoSearch(props) {

    const {SearchCatalogo, setSearchCatalogo} = props

    return (
        <div class="form-outline centered">
            <input 
                type="search" 
                id="form1" 
                class="form-control" 
                value={SearchCatalogo} 
                onChange={(e) => { setSearchCatalogo(e.target.value) }} 
                placeholder="Buscar..">
            </input>
        </div>
      )
}