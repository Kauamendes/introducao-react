import React from 'react'
import   './App.css'

import Primeiro from './componentes/primeiro'
import ComParametro from './componentes/comParametro'
import ComFilhos from './componentes/comFilhos'
import Card from './componentes/layout/Card'


export default (props) => (
<div className="App">
        <Card titulo="Primeiro Componente">
        <Primeiro/>
        </Card>
        <Card titulo="Componente com parametro"> 
        <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
        <ComParametro titulo="Opa" subtitulo="Epa" />
        </Card>
        
        <Card titulo="Componentes com filhos"> 
        <ComFilhos>
            <ul>
                <li>ANA</li>
                <li>BIA</li>
                <li>CARLOS</li>
            </ul>
        </ComFilhos>
        </Card>
    </div>
);