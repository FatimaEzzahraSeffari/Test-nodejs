import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Productlist from './components/productlist'
import { Description } from './components/Description';

function App () {
  return (
  
  <>
<Router>
<Header/>
<Routes>
<Route exact path="/" element={<Productlist /> }></Route>
<Route path='/product/:id' element={<Description/>}></Route>
</Routes>
<Footer/>
</Router>
</>
  );
}
  
  export default App;
