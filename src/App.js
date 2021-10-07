import {Provider} from 'react-redux'
import store from './store'
import {Login, Home, Header,Footer,Contato,Catalog, Wallpaper } from './components'
function App() {
  return (
    <Provider store={store}>
      <Header/>
      <Wallpaper>
        <Login/>
        <Home/>
        <Catalog/>
        <Contato/>
      </Wallpaper>
      <Footer/>
    </Provider>
  );
}

export default App;
