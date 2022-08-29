import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "./App.css"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Teamcontainer from './components/team/Teamcontainer'
import Sales from './components/sales/Sales';
import Footer from './components/footer/Footer'
import Collection_cont from './components/collection/CollectionCont'
function App() {
  return (
    <>
    <Header/>
    <Hero/>
    <Teamcontainer/>
    <Sales/>
    <Collection_cont/>
    <Footer/>
    </>
  );
}

export default App;
