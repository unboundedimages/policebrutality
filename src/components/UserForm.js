import React from 'react';
//import axios from 'axios;;

class UserForm extends React.Component {
	constructor(props) {
		super(props);
		this.state={value1:''};
		this.state={value2:''};

		this.handleChange1 = this.handleChange1.bind(this);
		this.handleChange2 = this.handleChange2.bind(this);

		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange1(event) {
		this.setState({value1:event.target.value});
	}

	handleChage2(event) {
		this.setState({value2:event.target.value})
	}

	handleSubmit(event) {
		console.log('First Name: ', this.state.value1 + ' Last Name: ' + this.state.value2);
	}

	render() {
		return (
			<form onSubmit = {this.handleSubmit}>
			  <label>
			    First Name:
			     <div>
			       <input type='text' value={this.state.value1} onChange={this.handleChange1} />
			     </div>
			  </label>
			  <label>
			    Last Name:
				<div>
				  <input type='text' value={this.state.value2} onChange={this.handleChange2} />
				</div>
			  </label>
			 <input type="submit" value="Submit" />
			</form>
		)
	}
}

export default UserForm;
