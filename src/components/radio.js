import React from 'react';

class PizzaSizePicker extends React.Component {
    constructor() {
      super();
      
    //   this.state = {
    //     size: ''
    //   };

      this.state = {
        transit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({
          transit: event.target.value
        });
      }

      handleSubmit(event) {
        event.preventDefault();
        
        alert(`You chose the ${this.state.transit} pizza.`);
      }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
             <span>   
            <label>
                Where you: Walking 
                <input 
                type="radio" 
                value="walking" 
                checked={this.state.transit === "walking"} 
                onChange={this.handleChange} 
                />
            </label>
            </span>
            <span>
            <label>
                or Driving
                <input 
                type="radio" 
                value="driving" 
                checked={this.state.transit === "driving"} 
                onChange={this.handleChange}/> 
            </label>
            </span> 
            <button type="submit">Make your choice</button> 
            </form>  
        //   <form onSubmit={this.handleSubmit}>
        //     <p>Select a pizza size:</p>
            
        //     <ul>
        //       <li>
        //         <label>
        //         Small: <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
        //           <input
        //             type="radio"
        //             value="small"
        //             checked={this.state.size === "small"}
        //             onChange={this.handleChange}
        //           />
                 
        //         </label>
        //       </li>
              
        //       <li>
        //         <label>
        //         Medium <span>&nbsp;&nbsp;</span>
        //           <input
        //             type="radio"
        //             value="medium"
        //             checked={this.state.size === "medium"}
        //             onChange={this.handleChange}
        //           />
                  
        //         </label>
        //       </li>
      
        //       <li>
        //         <label>
        //         Large
        //           <input
        //             type="radio"
        //             value="large"
        //             checked={this.state.size === "large"}
        //             onChange={this.handleChange}
        //           />
                 
        //         </label>
        //       </li>
        //     </ul>
      
        //     <button type="submit">Make your choice</button>
        //   </form>
        );
      }
      

  }

  export default PizzaSizePicker;