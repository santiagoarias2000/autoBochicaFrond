import React from "react";
import Webcam from "react-webcam";
import "../../../../assets/css/styleBody.css";

interface State {
  img_src: string;
}

export default class camera extends React.Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      img_src: ""
    };
  }

  capture = () => {
    const imageSrc = (this.refs.webcam as Webcam).getScreenshot();
    if (imageSrc) {
      this.setState({ img_src: imageSrc });
    }
  };

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode: "user"
    };

    return (
      <div>
        <main id="main" className="main">
        <div className="camera_center">
          <Webcam
            audio={false}
            height={500}
            ref={"webcam"}
            screenshotFormat="image/jpeg"
            width={500}
            videoConstraints={videoConstraints}
            onUserMediaError={() => window.alert('cant access your camera')}
          />
        </div>
        <div className="camera_center_button">
          <button onClick={this.capture} className="color_camera">Tomar foto</button>
        </div>
        <div>
          <img src={this.state.img_src} />
        </div>
        </main>

      </div>
    );
  }
}