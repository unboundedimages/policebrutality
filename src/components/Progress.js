import React from 'react';
import { Progress } from 'semantic-ui-react';

const UploadBar = () => <Progress percent={33} progress />

//     return (
//         <div className="ui progress">
//   <div className="bar">
//     <div className="progress"></div>
//   </div>
//   <div className="label">{Math.round(this.state.loaded,2) }% Uploading Files</div>
// </div>
//     )


export default UploadBar;