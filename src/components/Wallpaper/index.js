import styled from "styled-components"

function Wallpaper({children}) {

const Squarewallpaper = styled.div`
  background-color: grey;
  color: black;
  height: 100vh;
  padding: 10px;
  border-color:  black;
  border-style: solid;
  border-width: 10px;
  margin-top: 130px;
  `
return (
  <Squarewallpaper>{children}</Squarewallpaper>
);

}

export default Wallpaper;