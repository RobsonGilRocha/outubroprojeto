import {Login, Home, Header,Footer,Contato,Catalog, Wallpaper } from './components'
import {useSelector, useDispatch} from 'react-redux'

function App() {
  const page = useSelector( state => state.page);
  const dispatch = useDispatch();

  function PAGEZERO (){
    dispatch({ type: 'PAGE_[0]'})
  }
  function PAGEONE (){
    dispatch({ type: 'PAGE_[1]'})
  }
  function PAGETWO (){
    dispatch({ type: 'PAGE_[2]'})
  }
  function PAGETHREE (){
    dispatch({ type: 'PAGE_[3]'})
  }
  return (
    <>
      <Header/>
      <Wallpaper>
        {page === "page[0]" ? <Home/>:<></>}
        {page === "page[1]" ? <Login/>:<></>}
        {page === "page[2]" ? <Catalog/>:<></>}
        {page === "page[3]" ? <Contato/>:<></>}
        <lu>
          <button onClick={PAGEZERO}>PAGE[0]Home</button>
          <button onClick={PAGEONE}>PAGE[1]Login</button>
          <button onClick={PAGETWO}>PAGE[2]Catalog</button>
          <button onClick={PAGETHREE}>PAGE[3]Contato</button>
        </lu>
      </Wallpaper>
      <Footer/>
    </>
  );
}
export default App;
