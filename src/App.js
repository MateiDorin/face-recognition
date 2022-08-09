import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';

function App() {

  const onInputChange = (event) => {
    console.log(event.target.value)
  }

  const onButtonClick = () => {
    console.log('click')
  }

  return (
    <div>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm onInputChange = {onInputChange} onButtonClick = {onButtonClick}/>
      {/* <p>logo</p>
      <p>IMage link form</p>
      <p>Face recognition</p> */}
    </div>
  );
}

export default App;
