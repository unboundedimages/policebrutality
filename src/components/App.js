import React from "react";
// import Spinner from './Spinner';
import Title from "./Title";
import Youtube from "./Youtube";
//import UserForm from "./UserForm";
import PostForm from "./testing.js";
// import Forms from './Form';
// import ClothesDescription from './Description';
import FormQuestions from './FormQuestions';
// import PizzaSizePicker from './radio';

class App extends React.Component {
  render() {
    return (
      <div className="ui container inverted segment">
        <Title />
        <div className="ui header">
          {/* <h2>Help us identify police brutality</h2> */}
          {/* <h4>By taking a stand and making this a public record, you are helping shape a better tomorrow and future</h4> */}
        </div>
        {/* <form  method="post" action="#" id="#" >  */}
        {/* <form method= "post">  */}
        {/* <form> */}
       {/* <FormQuestions /> */}
	    <Youtube />
	    {/*<UserForm />*/}
        {/* <PostForm /> */}
        {/* </form>	 */}
        {/* <Forms /> */}
        {/* <ClothesDescription /> */}
        {/* <div> 
					<FormQuestions />                
				</div> */}
        {/* <a href="http://192.168.0.18:8081/pingo">ping</a> */}
        {/* <input type="submit" value="Submit" /> */}
        {/* </form> */}
        {/* <Spinner message="Please accept location request..." /> */}
        {/* <PizzaSizePicker /> */}
      </div>
    );
  }
}

export default App;
