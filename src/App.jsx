
import ListGroup from "./components/ListGroup"
import EmailNav from "./components/EmailNav";


function App () {
  return(
    <div className="App" style={{backgroundColor:"#eee"}}>
    <div style={{display:"flex", flexDirection:"row", padding:40, alignContent:"center"}}>
      <EmailNav/>
      <div style={{height:900, width:900, backgroundColor:"orange"}}>
        2
      </div>
      <div style={{height:900, width:900, backgroundColor:"orange"}}>
        3
      </div>
    </div>
    </div>
  ); 
}

export default App;
 