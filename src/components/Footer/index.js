import styled from "styled-components"

function Footer() {

const Squarefooter = styled.div`
  background-color: blue;
  color: red;
  min-height: 100px;
  padding: 10px;
  bottom: 0;
  border-color:  black;
  border-style: solid;
  border-width: 5px;
  `
  const Squarewallpaper = styled.div`
  background-color: grey;
  color: black;
  min-height: 10px;
  padding: 10px;
  border-color:  black;
  border-style: solid;
  border-width: 10px;
  `
return (
  <>
    <Squarefooter>
      <h3>
        Tela de Footer é um componente de letra vermelha e fundo azul
      </h3>
    </Squarefooter>
    <Squarewallpaper>
      <h4>
        Obs: axios,dayjs e paginação(react-router-dom)
      </h4>
    </Squarewallpaper>
  </>
);

}

export default Footer;