import './App.css';
import Filter from './components/filter'
import Productlist from './components/productlist'
import Store from './store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store = {Store} >
    <div className = "app">
      <Filter></Filter>
      <Productlist>
      </Productlist>
    </div>
    </Provider>

  );
}

export default App;
