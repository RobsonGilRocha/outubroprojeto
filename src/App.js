
import {Login, Home, Header,Footer,Contato,Catalog, Wallpaper } from './components'
function App() {
  return (
  <>
    <Header/>
    <Wallpaper>
      <Login/>
      <Home/>
      <Catalog/>
      <Contato/>
    </Wallpaper>
    <Footer/>
    </>
  );
}

export default App;
