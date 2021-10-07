import styled from "styled-components"

function Wallpaper({children}) {

const Squarewallpaper = styled.div`
  background-color: grey;
  color: black;
  min-height: 100vh;
  padding-top: 140px;
  border-color:  black;
  border-style: solid;
  border-width: 10px;
  `
return (
  <Squarewallpaper>{children}</Squarewallpaper>
);

}

export default Wallpaper;