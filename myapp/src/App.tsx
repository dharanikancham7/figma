import { Component} from "react";
import Head from "./Components/Head";
import Card1 from "./Components/Card1";
import Card2 from "./Components/Card2";
import Card3 from "./Components/Card3";
import Teams from "./Components/Teams";
import Footer from "./Components/Footer";
import './App.css'
interface Istate{

}
interface Iprops{


}
class App extends Component<Iprops,Istate>{
    render(){
        return(
            <div>
               <Head/> 
               <Card1/>
               <Card2/>
               <Card3/>
               <Teams/>
               <Footer/>

              
            </div>
        )
        
    }
}
export default App;