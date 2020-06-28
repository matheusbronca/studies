import React, { useState } from 'react';

export default (props) => {
    const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0));

    function gerarNumeroNaoContido(array) {
        const min = 1;
        const max = 60;
        const novoNumero = parseInt(Math.random() * (max - min)) + min

        return array.includes(novoNumero) ? gerarNumeroNaoContido(array) : novoNumero
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdNumero)
        .fill(0)
        .reduce((a, e) => {
            const novoNumero = gerarNumeroNaoContido(a)
            console.log(a, e, novoNumero);
            return [...a, novoNumero]
        }, [])
        .sort((a, b) => a - b);
        setNumeros([novoArray])
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </>
    )
} 