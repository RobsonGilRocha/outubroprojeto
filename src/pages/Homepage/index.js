import { Home, Header,Footer,Contato,Catalog, Wallpaper } from '../../components/index'

function Homepage() {

    
  return (
    <>
    <Header/>
      <Wallpaper>
        <Home/>
        <Catalog/>
        <Contato/>
      </Wallpaper>
      <Footer/>
  </>
  );
}

export default Homepage;