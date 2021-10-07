import styled from "styled-components"

function Header() {

const Squareheader = styled.div`
  background-color: white;
  color: black;
  min-height: 100px;
  width: 100%;
  padding: 10px;
  position: fixed;
  top: 0;
  border-color:  black;
  border-style: solid;
  border-width: 5px;
  `
return (
  <Squareheader>
    <h3>
        Tela de Header é um componente de letra preta e fundo branco.
    </h3>
  </Squareheader>
);

}

export default Header;