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
            setValor(parseFloat (e.target.value))
        };
        const gorjeInput =(e) =>{
            setGorjeta (parseFloat(e.target.value))
        };

        return (
        <>
        <h1>Calculadora Gorjeta</h1><hr/>
        <h3>valor conta</h3>
        <Input placeholder = "Digite Valor da Conta" type="number" value ={valor} onChange={handleInput}/><br/>
        <h3>Porcentagem Gorjeta</h3>
         <Input placeholder = "Digite a Porcentagem" type= "number" value ={gorjeta} onChange={gorjeInput}/>
            <h3>valor Conta R$ {valor}</h3>
            <h3> valor gorjeta R$ {gorjeta}</h3>
            <h3>Essse e o valor a ser pago R$ {valor +((gorjeta*valor)/100) }</h3>


        </> 
         );
        }
export default App;