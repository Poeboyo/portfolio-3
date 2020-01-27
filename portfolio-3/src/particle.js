import Particles from "react-particles-js";

class App extends Component {
  render() {
    return (
      <Particles
        params={{
          particles: {
            shape: {
              type: "images",
              images: [
                { src: "imgs/bootstrap-logo.png", height: 20, width: 20 },
                { src: "imgs/js-logo.png", height: 20, width: 20 }
              ]
            }
          }
        }}
      />
    );
  }
}
