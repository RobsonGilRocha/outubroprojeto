import styled from "styled-components"

function Footer() {

const Squarefooter = styled.div`
  background-color: blue;
  color: red;
  height: 100px;
  padding: 10px;
  bottom: 0;
  border-color:  black;
  border-style: solid;
  border-width: 5px;
  `
  const Squarewallpaper = styled.div`
  background-color: grey;
  color: black;
  height: 10px;
  padding: 10px;
  border-color:  black;
  border-style: solid;
  border-width: 10px;
  `
return (
  <>
  <Squarefooter>tela de Footer é um componente de letra vermelha e fundo azul</Squarefooter>
  <Squarewallpaper>Obs: redux,axios,dayjs e paginação(react-router-dom)
  </Squarewallpaper>
  </>
);

}

export default Footer;