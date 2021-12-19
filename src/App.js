import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Shop from "./pages/Shop";
import Navbar from "./components/Navbar";
import Footer from './components/Footer'
import Newsletter from './components/Newsletter'
import Announcement from "./components/Announcement";
import ForgotPassword from "./pages/ForgotPassword";
import Loungewear from "./pages/Loungewear";
import Jackets from "./pages/Jackets";
import Shirt from "./pages/Shirt";
import { BrowserRouter as Router , Route , Switch} from "react-router-dom";



const App = () => {
  return (
  <Router>
    <Navbar/>
    <Announcement/>
    <Switch>
        <Route path='/' exact component={Shop}/>
      </Switch>
      <Switch>
        <Route path='/Shop' exact component={Shop}/>
      </Switch>
      <Switch>
        <Route path='/Register'  component={Register}/>
      </Switch>
      <Switch>
        <Route path='/Login'  component={Login}/>
      </Switch>
      <Switch>
        <Route path='/Cart'  component={Cart}/>
      </Switch>
      <Switch>
        <Route path='/ForgotPassword'  component={ForgotPassword}/>
      </Switch>
      <Switch>
        <Route path='/Loungewear'  component={Loungewear}/>
      </Switch>
      <Switch>
        <Route path='/Jackets'  component={Jackets}/>
      </Switch>
      <Switch>
        <Route path='/Shirt'  component={Shirt}/>
      </Switch>
      
      <Newsletter/>
      <Footer/>

  </Router>
  );
}

export default App;