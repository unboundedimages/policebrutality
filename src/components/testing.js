import React, { Component } from "react";
// import axios from "axios";

class PostForm extends Component {
  constructor(props) {
    super(props);

      
      
      
      
    this.state = {
        imageURL: '',
      };
  
      this.handleUploadImage = this.handleUploadImage.bind(this);
    }
  
    handleUploadImage(ev) {
      ev.preventDefault();
  
      const data = new FormData();
      data.append('file', this.uploadInput.files[0]);
      data.append('filename', this.fileName.value);
  
      fetch('https:///policebrutality.news/upload', {
        method: 'POST',
        body: data,
      }).then((response) => {
        response.json().then((body) => {
          this.setState({ imageURL: `https:///policebrutality.news/${body.file}` });
        });
      });
      
      
      
      
      
      
//     this.state = {
//       //   ipAddress: this.theIpIs,
//       two: "",
//       three: "",
//       four: " ",
//       theIpIs: ""
//     };
//   }

      
      

//   componentDidMount() {
//     axios
//       .get("https://api.ipify.org/?format=json")
//       .then(response => {
//         console.log(response.data.ip);
//         const theIpIs = response.data.ip;
//         console.log("This is : ", theIpIs);
//         this.setState({ theIpIs });
//         return theIpIs;
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

//   changeHandler = e => this.setState({ [e.target.name]: e.target.value });

//   fileChangeHandler = e =>
//     this.setState({
//       selectedFile: e.target.files[0],
//       loaded: 0
//     });

//   submitHandler = e => {
//     e.preventDefault();
//     console.log(this.state);
//     axios
//       .post("https://policebrutality.news/upload", this.state)
//       .then(response => {
//         console.log(response);
//       })
//       .catch(error => {
//         console.log(error);
//       });
  };

  render() {
    // const { theIpIs, two, three, four } = this.state;
    return (
    //   <div>
    //     <form onSubmit={this.submitHandler}>
    //       <div>
    //         <input type="text" name="ipAddress" value={theIpIs}></input>
    //       </div>
    //       <div>
    //         <input
    //           type="text"
    //           name="two"
    //           value={two}
    //           onChange={this.changeHandler}
    //         ></input>
    //       </div>
    //       <div>
    //         <input
    //           type="text"
    //           name="three"
    //           value={three}
    //           onChange={this.changeHandler}
    //         ></input>
    //       </div>
    //       <div>
    //         <input
    //           type="text"
    //           name="four"
    //           value={four}
    //           onChange={this.changeHandler}
    //         ></input>
    //       </div>
    //       <div>
    //         <input
    //           type="file"
    //           name="file"
    //           //   value={four}
    //           onChange={this.fileChangeHandler}
    //         ></input>
    //       </div>

    //       <button type="submit">Submit</button>
    //     </form>
    //   </div>
        
    <form onSubmit={this.handleUploadImage}  enctype="multipart/form-data">
    <div>
      <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
    </div>
    <div>
      <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Enter the desired name of file" />
    </div>
    <br />
    <div>
      <button>Upload</button>
    </div>
    <img src={this.state.imageURL} alt="img" />
  </form>
    );
  }
}

export default PostForm;
