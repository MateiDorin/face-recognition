import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import Clarifai from 'clarifai';
import { clarifaiKey } from "../clarifai";

function App() {
  const onInputChange = (event) => {
    console.log(event.target.value);
  };

  const onButtonClick = () => {
    console.log("click");

    const raw = JSON.stringify({
      user_app_id: {
        user_id: "clarifai",
        app_id: "main",
      },
      inputs: [
        {
          data: {
            image: {
              url: "https://samples.clarifai.com/metro-north.jpg",
            },
          },
        },
      ],
    });

    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: clarifaiKey,
      },
      body: raw,
    };

    console.log(raw)

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    // fetch(
    //   "https://api.clarifai.com/v2/models/face-detection/versions/6dc7e46bc9124c5c8824be4822abe105/outputs",
    //   requestOptions
    // )
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
  };

  return (
    <div>
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm
        onInputChange={onInputChange}
        onButtonClick={onButtonClick}
      />
      {/* <p>logo</p>
      <p>IMage link form</p>
      <p>Face recognition</p> */}
    </div>
  );
}

export default App;
