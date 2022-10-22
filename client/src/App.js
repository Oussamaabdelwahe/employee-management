import { BrowserRouter,Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Home from "./pages/Home"
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import AddEdit from "./pages/AddEdit";
import {store} from "./Store"
import {Provider} from  'react-redux'

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
        <ToastContainer position="top-center" />
       <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route  path="/addContact" element={<AddEdit/>}/>
          <Route  path="/update/:id" element={<AddEdit/>}/>
        </Routes>
        </Provider>
        

      </div>
    </BrowserRouter>

  );
}

export default App;
