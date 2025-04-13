import logo from './logo.svg';
import './App.css';
import Body from './components/Body';
import { Provider } from 'react-redux';
import appStore from "./utils/appStore";
function App() {
  return (
    <div className=" text-center text-6xl text-green-800 font-bold bg-slate-400">
     <Provider store={appStore}>
     <Body />
     </Provider>
    </div>
  );
}

export default App;
