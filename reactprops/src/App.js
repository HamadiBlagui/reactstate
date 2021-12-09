
import './App.css';
import  Profile  from './Components/Profile/Profile';
import PropTypes from  "prop-types";
import white from './assets/hamadihk.jpg';



function App() {

  const handelName=(e)=>{e.preventDefault();alert("Hamadi Blagui")};
  const styleObject={ color:"white", textAlign:'center'};
  
  return (
    <div className="App" style={styleObject}>

      <Profile
      FullName= "Hamadi"
      Bio="Full Stack Web Developer"
      Profession="Chief Executive Officer">
      <img src={white} width="380" height="380" />  
      </Profile>
     <button onClick={handelName} >Click Me Now</button>
      

     
    </div>
  );
}


//default props:
Profile.defaultProps={
  FullName: "Hamadi",
  Bio:"fullstack js",
  Profession:"web developer",
}

Profile.proptype={
  FullName: PropTypes.string,
  Bio:PropTypes.string,
  Profession:PropTypes.string,

}

export default App;
