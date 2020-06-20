import React from 'react';

class FormQuestions extends React.Component {
    constructor() {
        super();
       
        this.state = {
          transit: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      } //ends contructor

      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    

    render() {
        
        return (
             <div className='ui form stackable container'>

                <div className='fields'>
                    <div className='field'>
                        {/* <label>Where you walking or driving?</label> */}
                        <div>
                        <label htmlFor="walk">Where you:<b> Walking</b> </label>  <input id="walk"
                        type="radio" 
                        value="walking" 
                        checked={this.state.value === "walking"} 
                        onChange={this.handleChange} 
                        />&nbsp;
                        <label htmlFor="drive"> <b>Driving </b></label> <input id="drive" 
                        type="radio" 
                        value="Driving" 
                        checked={this.state.value === "Driving"} 
                        onChange={this.handleChange} /> 
                        <label htmlFor="walk_drive_NA"> &nbsp;N/A </label> 
                        <input id="walk_drive_NA" 
                        type="radio" 
                        value="N/A" 
                        checked={this.state.value === "N/A"} 
                        onChange={this.handleChange} required/> &nbsp; ?
                    </div>
                    </div>
                </div>

                <div className='fields'>
                    <div className='field'>
                        <div>
                            <b>Where you at:</b><label htmlFor="working"> &nbsp; Work</label> <input id="working" 
                            type="radio" 
                            value="work" 
                            checked={this.state.value === "work"} 
                            onChange={this.handleChange} 
                            />
                            <label htmlFor="home"> &nbsp; Home</label> <input id="home" 
                            type="radio" 
                            value="home" 
                            checked={this.state.value === "home"} 
                            onChange={this.handleChange} required
                            />
                            <label htmlFor="shopping"> &nbsp; Shopping</label> <input id="shopping" 
                            type="radio" 
                            value="shopping" 
                            checked={this.state.value === "shopping"} 
                            onChange={this.handleChange} 
                            />
                            <label htmlFor="recreation"> &nbsp; Recreational facility </label> <input id="recreation" 
                            type="radio" 
                            value="recreation" 
                            checked={this.state.value === "recreation"} 
                            onChange={this.handleChange} 
                            /> &nbsp;?
                        </div>
                    </div>
                    
                </div>

            </div>
            //  <div className='ui form stackable container'>

            //     <div className='fields'>
            //         <div className='field'>
            //             <label>Where you walking or driving?</label>
            //         </div>
            //         <div className='field'>
            //             Walking <input type="radio" value="Walking" name="inTransit"/>
            //         </div>
            //         <div className='field'>
            //             Driving <input type="radio" value="Driving" name="inTransit" />
            //         </div>
            //         <div className='field'>
            //             N/A <input type="radio" value="N/A" name="inTransit" required/>
            //         </div>
            //     </div>

            //     <div className='fields'>
            //         <div className='field'>
            //             <label>Where you at:</label>
            //         </div>
            //         <div className='field'>
            //             <b>work</b> <input type="radio" value="work" name="locatiom"/>
            //         </div>
            //         <div className='field'>
            //            home <input type="radio" value="home" name="locatiom" required/>
            //         </div>
            //         <div className='field'>
            //            shopping <input type="radio" value="shopping" name="locatiom"/>
            //         </div>
            //         <div className='field'>
            //            recreational facility <input type="radio" value="recreation" name="locatiom"/> ?
            //         </div>
            //     </div>

            // </div>
        )
    }
}

export default FormQuestions;