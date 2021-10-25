import {useSelector, useDispatch} from 'react-redux'
import styled from "styled-components"
import {Row, Separator, Line} from '../index'

function Login() {
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

const Squarepassword = styled.div`
  background-color: white;
  color: black;
  min-height: 100px;
  min-width: 200px;
  padding: 10px;
  margin: 10%;
  border-color:  black;
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  `
  const Gtext = styled.div`
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
  `

return (
  <>
  <Row>
    <Squarepassword>
          <Gtext>
            Login é um componente de Pagina /login
            <p/>USER:<input/>
            <p/>PASS:<input/>
            <p/><button><Gtext>Botão</Gtext></button>
          </Gtext> 
    </Squarepassword>
    <Separator x="200"/>
    <Squarepassword>
          <Gtext>
            Login é um componente de Pagina /login
            <p/>USER:<input/>
            <p/>PASS:<input/>
            <p/><button><Gtext>Botão</Gtext></button>
          </Gtext> 
    </Squarepassword>
  </Row>
  <Line/>
  
    <Squarepassword>
    <p>
        {data ? <h4>DATA_TRUE</h4>:<h4>DATA_FALSE</h4>}
        <button onClick={DATATRUE}>DATA_TRUE</button>
        <button onClick={DATAFALSE}>DATA_FALSE</button>
    </p>
    <p>
        {login ? <h4>LOGIN_TRUE</h4>:<h4>LOGIN_FALSE</h4>}
        <button onClick={LOGINTRUE}>LOGIN_TRUE</button>
        <button onClick={LOGINFALSE}>LOGIN_FALSE</button>
    </p>
    <p>
        {load ? <h4>LOAD_TRUE</h4>:<h4>LOAD_FALSE</h4>}
        <button onClick={LOADTRUE}>LOAD_TRUE</button>
        <button onClick={LOADFALSE}>LOAD_FALSE</button>
    </p>
    <p>
        {colorDark ? <h4>COLORDARK_TRUE</h4>:<h4>COLORDARK_FALSE</h4>}
        <button onClick={COLORDARKTRUE}>COLORDARK_TRUE</button>
        <button onClick={COLORDARKFALSE}>COLORDARK_FALSE</button>
    </p>
    <p>
        {error ? <h4>ERROR_TRUE</h4>:<h4>ERROR_FALSE</h4>}
        <button onClick={ERRORTRUE}>ERROR_TRUE</button>
        <button onClick={ERRORFALSE}>ERROR_FALSE</button>
    </p>
    </Squarepassword>
  </>
    
);

}

export default Login;