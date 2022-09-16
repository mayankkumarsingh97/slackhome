import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import "./App.css"
import Header from "./components/header/Header"
import Hero from "./components/hero/Hero"
import Teamcontainer from './components/team/Teamcontainer'
import Sales from './components/sales/Sales';
import Footer from './components/footer/Footer'
import Collection_cont from './components/collection/CollectionCont'
import { MyContext } from '.'
function App() {
  const data={name:"Mayank",
             age:33,
             address:"I 178 Shiv Durga Vihar",
             hobbies:["Criket","Football","Kitkit"],
             Contact:{
              primary:"8178169046",
              secondary:"9310307506"
             },getContact:()=> "75051528090",

            }
  return (
    <>
    <Header/>
    <MyContext.Provider value={data}>
    <Hero/>
    <Teamcontainer/>
    <Sales/>
    <Collection_cont/>
    <Footer/>
    </MyContext.Provider>
   
    </>
  );
}

export default App;
