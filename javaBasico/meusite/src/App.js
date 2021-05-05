import React,{useState} from 'react';
import styled from 'styled-components';

        const Input = styled.input`
        width:200px;
        height:30px;
        font-size:16px;
        padding:10px;
        border:1px solid #000;
        `;
    function App(){
        const [valor,setValor] = useState('');
        const [gorjeta,setGorjeta] = useState('');

        const handleInput = (e) =>{
            setValor(e.target.value)
        };
        const gorjeInput =(e) =>{
            setGorjeta(e.target.value)
        };

        return (
        <>
        <h1>Calculadora Gorjeta</h1><hr/>
        <h3>valor conta</h3>
        <Input placeholder = "Digite Valor da Conta" type="number" value ={valor} onChange={handleInput}/><br/>
        <h3>Porcentagem Gorjeta</h3>
         <Input placeholder = "Digite a Porcentagem" type= "number" value ={gorjeta} onChange={gorjeInput}/>
        </> 
         );
        }
export default App;