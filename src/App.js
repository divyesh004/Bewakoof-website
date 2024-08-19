import logo from './logo.svg';
import './App.css';
import Navbar from './Compontes/Navbar';
import Mainroutes from './Mainroutes';
import Navbar_M from './MediaComponets/Navbar_M';
import MediaRoutes from './MediaRoutes';
import Footer from './Compontes/Footer';
import Footer_m from './MediaComponets/Footer_m';



function App() {
  return (
    <div className="App ">
      <div className="d-none d-lg-block">
        <Navbar />
        <Mainroutes />
        <Footer />
      </div>
      <div className="d-block d-lg-none">
        <Navbar_M />
        <MediaRoutes />
        <Footer_m />
      </div>
    </div>



  );
}

export default App;
