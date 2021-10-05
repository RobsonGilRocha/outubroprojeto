import styled from "styled-components"

function Header() {

const Squareheader = styled.div`
  background-color: white;
  color: black;
  height: 100px;
  padding: 10px;
  position: fixed;
  top: 0;
  width: 100%;
  `
return (
  <Squareheader>tela de Header é um componente de letra preta e fundo branco</Squareheader>
);

}

export default Header;