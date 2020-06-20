import React from "react";
import axios from "axios";
import Spinner from "./Spinner";
//import UserForm from './UserForm';
import { Progress } from "semantic-ui-react";

class Youtube extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      theIpIs: "",
      loaded: 0,
      lat: null,
      long: null,
      errorMessage: '',
      input: this.selectedFile,
      defaultValue: this.theIpIs
    };
    this.onClickHandler = this.onClickHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://api.ipify.org/?format=json")
      .then(response => {
        console.log(response.data.ip);
        const theIpIs = response.data.ip;
        console.log("This is : ", theIpIs);
        this.setState({ theIpIs });
        return theIpIs;
      })
      .catch(error => {
        console.log(error);
      });
    var options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };

    navigator.geolocation.getCurrentPosition(
      position => this.setState({
        lat: position.coords.latitude,
        long: position.coords.longitude
      }),
      err => this.setState({errorMessage: err.message}),options
    )

  } options



  handleInput(e) {
    this.setState({
      input: e.target.value
    });
  }

  onClickHandler = (e, theIpIs) => {
    e.preventDefault()
   
console.log("this is the latitude: ", this.state.lat)
    console.log("this is your ip: ", this.state.theIpIs);
    const myIpIs = this.state.theIpIs;
    const myFileName = this.state.selectedFile;
    console.log("this is the filename: ", myFileName.name);
    const data = new FormData();
    data.append("file", this.state.selectedFile, myIpIs + '_' + 'latitude_' + this.state.lat + '_' + 'longitude_' + this.state.long +'_'+ myFileName.name);
    // data.append("file", this.state.selectedFile, this.state.theIpIs);
    data.append("filename", this.state.theIpIs);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "https://policebrutality.news"
      },

      onUploadProgress: ProgressEvent => {
        this.setState({
          loaded: Math.round((ProgressEvent.loaded / ProgressEvent.total) * 100)
        });
        // console.log("upload progress: ",Math.round(this.state.loaded))
        console.log("test upload: ", this.state.loaded);
        console.log('ProgessEvent.total: ', ProgressEvent.total)
        if (this.state.loaded > 100) {
          alert("thank you for uploading your video")
          this.setState({
           loaded: 0
          })
        }
      }
    };

    axios
      .post("https://policebrutality.news/upload", data, config, myIpIs)
      .then(res => {
        // then print response status
        console.log("Is this ", res.statusText, "?");
        console.log(res);
        console.log("my IP is ", myIpIs);
        // alert('Thank you for uploading  your video')
      });
  };

  onChangeHandler(event) {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    });
    // console.log("target file", event.target.name);;
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onClickHandler} enctype="multipart/form-data">
          <div className="ui segment inverted placeholder attached">
            <h2 className="ui icon header">Upload your video</h2>
            <div className="ui icon header">
              <div>COORDINATES: {this.state.lat}</div>
              <div>COORDINATES: {this.state.long}</div>
              {/* <success /> */}
              <div className="ui segment">
                <input
                  className="ui input"
                  name="file"
                  type="file"
                  // accept="video/mp4 mov "
                  placeholder="Add Video files"
                  defaultValue=""
                  onChange={this.onChangeHandler}
                  onSubmit={this.handleInput}
                />

                {/* <input
                  className="ui input"
                  name="ipAddy"
                  type="text"
                  // accept="video/mp4 mov "
                  // placeholder="Add Video files"
                  defaultValue={this.state.theIpIs}
                  onChange={this.onChangeHandler}
                  onSubmit={this.handleInput}
                  disabled
                /> */}
              </div>
            </div>
            <div className="ui icon header">
              <i className="hand point up icon"></i>
            </div>
          </div>
          <div className="ui segment inverted">
            <button
              className="ui inverted black button"
              // type="button"
              type="submit"
              // onClick={this.onClickHandler}
            >
              <i className="cloud upload icon"> </i>Submit
            </button>
          </div>
          <div className="container"></div>
          {/* <Spinner/>  */}
          {/* <UploadBar/> */}
          {/* <div className="ui indicating progress"> */}
          {/* <div className="bar"> */}
          <Progress percent={this.state.loaded} progress />

          <div className="progress">
            {Math.round(this.state.loaded, 2)}% &nbsp; Uploading file
            from:&nbsp;{this.state.theIpIs}{" "}
          </div>
          {/* </div> */}
          <div className="label"></div>
          {/* </div> */}
        </form>
      </div>
    );
  }
}

export default Youtube;
