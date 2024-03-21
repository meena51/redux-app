import logo from './logo.svg';
import './App.css';
import store from "./redux/store"
import CakeCounter from './components/CakeCounter';
import { Provider } from 'react-redux';
function App() {
  return (
     <Provider store={store}>
      <div className="App">
      <CakeCounter/>
    </div>
     </Provider>
  );
}

export default App;
