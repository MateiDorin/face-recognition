import Tilt from "react-parallax-tilt";
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
  return (
    <div className="ma4 ma0">
      <Tilt perspective={2000}>
        <div className="tilt">
            <img pa3 src={brain} />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
