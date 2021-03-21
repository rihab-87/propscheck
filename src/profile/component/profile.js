
import webb from "./web.jpg";
import "./profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Alert } from "react-bootstrap";
import PropTypes from "prop-types";

function profile(props) {
//in line style
  const stylename={ color:"#8d108d",fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize: "x-large",fontWeight:700}
  const styleprofession={ fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize: "large",fontWeight:700}
  const stylebio={ fontFamily: "Georgia, 'Times New Roman', Times, serif",fontSize: "small",fontWeight:400,textAlign:"center"}
  
  return (
    <div>
      <div className="img_container">
        <div className="img_profile">
          {props.children}
        </div>
      </div>
      <div className="name_container">
        <h1 style={stylename}>{props.fullName}</h1>
        <h3 style={styleprofession}>{props.profession}</h3>
        <p style={stylebio}>{props.bio}</p>
      </div>

      <div>
        <Button variant="outline-secondary" onClick={props.alert}>
          View Profil
        </Button>
      </div>
    </div>
  );
}
export default profile;
// define PropsType to props. 
profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  handlName: PropTypes.func,
};
//Define default props for Profile component.
profile.defaultProps = {
  fullName: "fullname",
  profession: "profession",
  bio: "bibiogaphie",
};
