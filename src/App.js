
import './App.css';
import Profile from './profile/component/profile.js'
import imgprofile from "./profile/component/imgprofile.jpg";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from 'react-bootstrap';

function App() {
  var txt="Meagan FISHER is a web designer ,product designer, front-end developer,speaker,and writer.She's known for her love of owls, but is also crasy about typographiy,cats,coffe,and pastel rainbows.";
  var name="Meagan FISHER";
  function handlName(){
    return(
      alert(`This is a ${name} profile`)  
    );}
return (
    <div className="App">
      <div className="profile">
     < Profile fullName={name}  profession="Web developer fullstack JS" bio={txt} alert={handlName} >
         <img src={imgprofile} alt="webpage"  />
     </Profile>
     </div>
    </div>
  );
}
export default App;
