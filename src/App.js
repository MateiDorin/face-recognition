import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';

function App() {
  return (
    <div>
      <Navigation />
      <Logo />
      <ImageLinkForm />
      {/* <p>logo</p>
      <p>IMage link form</p>
      <p>Face recognition</p> */}
    </div>
  );
}

export default App;
