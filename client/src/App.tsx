import './App.css';
import GlobalStyles from './styles/globalStyles';
import { AllRoutes } from './routes';
import {BrowserRouter} from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <>
      <GlobalStyles/>

      <BrowserRouter>

        <AllRoutes/>

      </BrowserRouter>
      
      <ToastContainer/>
      
    </>
  );
}

export default App;
