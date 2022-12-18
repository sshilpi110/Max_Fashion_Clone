
import './App.css';
import Navbar from './component/navbar';

import Footer from './component/footer';
import Singup from './router/singup';
import Login from './router/login';
import Allroutes from './router/allroutes';
import Modaal from './router/modal';






function App() {


  return (
    <div className="App">
      
     <Navbar/>

<Allroutes/>     


   {/* <Singup/> */}
{/* <Login/> */}
<Footer/>
    </div>
  );
}

export default App;
