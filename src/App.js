import './App.css';
import BasicExample from './components/Navbar';
import Mainbody from './components/mainbody';
import Cards from './components/cards';
import Card2 from './components/card2';
import ADD from './components/add.jsx';
import Footer from './components/footer.jsx';
// import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <BasicExample/> 
    <Mainbody/>
    <Cards/>
    <Card2/>
    <ADD/>
    <Footer/>
    </>
  );
}

export default App;
