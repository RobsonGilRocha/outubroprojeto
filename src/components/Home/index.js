import {useSelector, useDispatch} from 'react-redux'
import styled from "styled-components"

function Home() {
  const data = useSelector( state => state.data);
  const login = useSelector( state => state.login);
  const load = useSelector( state => state.load);
  const colorDark = useSelector( state => state.colorDark);
  const error = useSelector( state => state.error);
  const page = useSelector( state => state.page);
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
function PAGETRUE (){
  dispatch({ type: 'PAGE_[0]'})
}
function PAGEFALSE (){
  dispatch({ type: 'PAGE_[1]'})
}

const Squarehome = styled.div`
  background-color: grey;
  color: black;
  height: 100px;
  width: 180px;
  padding: 10px;
  border-color:  black;
  border-style: solid;
  border-width: 10px;
  `
return (
  <Squarehome>
    <ul>
      tela de Home é um componente de letra preta e fundo cinza e bordas pretas
      </ul>
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
    <ul>
        {page === "page[0]" ? <h1>PAGE_TRUE</h1>:<h1>PAGE_FALSE</h1>}
        <button onClick={PAGETRUE}>PAGE[0]_TRUE</button>
        <button onClick={PAGEFALSE}>PAGE[0]_FALSE</button>
    </ul>
  </Squarehome>
);

}

export default Home;