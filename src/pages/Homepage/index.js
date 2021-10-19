import {Login, Home, Header,Footer,Contato,Catalog, Wallpaper } from '../../components/index'

function Homepage() {

    
  return (
    <>
    <Header/>
      <Wallpaper>
        <Home/>
        <Login/>
        <Catalog/>
        <Contato/>
      </Wallpaper>
      <Footer/>
  </>
  );
}

export default Homepage;