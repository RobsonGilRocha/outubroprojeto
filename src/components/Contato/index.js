import {useSelector, useDispatch} from 'react-redux'
import styled from "styled-components"

function Contato() {
  const data = useSelector( state => state.data);
  const login = useSelector( state => state.login);
  const load = useSelector( state => state.load);
  const colorDark = useSelector( state => state.colorDark);
  const error = useSelector( state => state.error);
  const dispatch = useDispatch();

function DATATRUE (){
  dispatch({ type: 'DATA_TRUE'})
}
function DATAFALSE (){
  dispatch({ type: 'DATA_FALSE'})
}
function LOADTRUE (){
dispatch({ type: 'LOAD_TRUE'})
}
function LOADFALSE (){
dispatch({ type: 'LOAD_FALSE'})
}
function LOGINTRUE (){
  dispatch({ type: 'LOGIN_TRUE'})
}
function LOGINFALSE (){
  dispatch({ type: 'LOGIN_FALSE'})
}
function COLORDARKTRUE (){
dispatch({ type: 'COLORDARK_TRUE'})
}
function COLORDARKFALSE (){
dispatch({ type: 'COLORDARK_FALSE'})
}
function ERRORTRUE (){
  dispatch({ type: 'ERROR_TRUE'})
}
function ERRORFALSE (){
  dispatch({ type: 'ERROR_FALSE'})
}

const Squarecontato = styled.div`
  background-color: green;
  color: black;
  min-height: 100px;
  min-width: 200px;
  padding: 10px;
  `
return (
  <Squarecontato>
    <h3>
    Tela de contato é um componente de letra preta e fundo verde
    </h3>
    <ul>
        {data ? <h1>DATA_TRUE</h1>:<h1>DATA_FALSE</h1>}
        <button onClick={DATATRUE}>DATA_TRUE</button>
        <button onClick={DATAFALSE}>DATA_FALSE</button>
    </ul>
    <ul>
        {login ? <h1>LOGIN_TRUE</h1>:<h1>LOGIN_FALSE</h1>}
        <button onClick={LOGINTRUE}>LOGIN_TRUE</button>
        <button onClick={LOGINFALSE}>LOGIN_FALSE</button>
    </ul>
    <ul>
        {load ? <h1>LOAD_TRUE</h1>:<h1>LOAD_FALSE</h1>}
        <button onClick={LOADTRUE}>LOAD_TRUE</button>
        <button onClick={LOADFALSE}>LOAD_FALSE</button>
    </ul>
    <ul>
        {colorDark ? <h1>COLORDARK_TRUE</h1>:<h1>COLORDARK_FALSE</h1>}
        <button onClick={COLORDARKTRUE}>COLORDARK_TRUE</button>
        <button onClick={COLORDARKFALSE}>COLORDARK_FALSE</button>
    </ul>
    <ul>
        {error ? <h1>ERROR_TRUE</h1>:<h1>ERROR_FALSE</h1>}
        <button onClick={ERRORTRUE}>ERROR_TRUE</button>
        <button onClick={ERRORFALSE}>ERROR_FALSE</button>
    </ul>
  </Squarecontato>
);

}

export default Contato;