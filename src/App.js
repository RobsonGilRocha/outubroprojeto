
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
      <Footer/>
    </Wallpaper>
    <h1>Obs: redux,axios,dayjs e paginação(react-router-dom)</h1>
  </>
  );
}

export default App;
