import styled from "styled-components"

function Home() {

const Squarehome = styled.div`
  background-color: grey;
  color: black;
  height: 100px;
  width: 200px;
  padding: 10px;
  z-index:-2;
  position: absolute;
  `
return (
  <Squarehome>tela de Home é um componente de letra preta e fundo cinza</Squarehome>
);

}

export default Home;