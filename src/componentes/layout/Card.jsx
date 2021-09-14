import './Card.css'
import React from 'react'

export default props =>
    <div className="card">
        <div className="Conteudo">
            {props.children}
        </div>
        <div className="Footer">
        {props.titulo }
        </div>
    </div>