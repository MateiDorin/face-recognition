import Tilt from "react-parallax-tilt";
import './Logo.css';

const Logo = () => {
  return (
    <div className="ma4 ma0">
      <Tilt perspective={2000}>
        <div className="tilt" style={{ height: "150px", width:"150px", marginLeft: "5rem", backgroundColor: "darkgreen" }}>
          <h1>React Parallax Tilt 👀</h1>
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
