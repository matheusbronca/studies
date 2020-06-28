import React, {useState} from 'react';
import Sub from './Sub.jsx';

export default (props) => {
    
    const [num, setNum] = useState(0);
    const [texto, setTexto] = useState('Valor');

    function quandoClicar(valorGerado, texto) {
        setTexto(texto)
       setNum(valorGerado);
    }

    return (
        <div>
            <h4>{texto}: {num} </h4>
            <Sub onClicar={quandoClicar}>Pedro</Sub>
        </div>
    );
}
