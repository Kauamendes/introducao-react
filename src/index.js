import './index.css'
import React from 'react'
import ReactDom from 'react-dom'

//import Primeiro from './componentes/primeiro'
//import ComParametro from './componentes/comParametro'
//import ComFilhos from './componentes/comFilhos'
import Card from './componentes/layout/Card'

ReactDom.render(
    <div>
        <Card titulo="Exercicio X"> 
            Conteudo
        </Card>

       {/* <ComFilhos>
            <ul>
                <li>ANA</li>
                <li>BIA</li>
                <li>CARLOS</li>
            </ul>
        </ComFilhos>
         {/*<Primeiro/>
         <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtitulo" />
         <ComParametro titulo="Opa" subtitulo="Epa" />  */}
         
    </div> ,
    document.getElementById('root')
)