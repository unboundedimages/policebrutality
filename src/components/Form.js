import React from 'react';
// import ClothesDescription from "./Description";
// import FormQuestions from "./FormQuestions";

class Forms extends React.Component {
    render() {
        return (
            <div className='ui form stackable container'>
                <div className='fields'>
                    <div className='field'>
                        <label>First name</label>
                        <input type="text" placeholder="First Name" />
                    </div>
                    <div className='field'>
                        <label>Middle name</label>
                        <input type="text" placeholder="Middle Name" />
                    </div>
                    <div className='field'>
                        <label>Last name</label>
                        <input type="text" placeholder="Last Name" />
                    </div>
                    <div className='field'>
                        <label>Case Number</label>
                        <input type="text" placeholder="optional" />
                    </div>
                    <div className='field'>
                        <label>City *</label>
                        <input type="text" placeholder="City" required />
                    </div>
                    <div className='field'>
                        <label>State *</label>
                        {/* <input type="text" placeholder="State" required /> */}
                        <select style={{height:36 + "px", width:170 + "px"}}>
                            <option value="---">Select State</option>
                            <option value="AL">Alabama (AL)</option>
                            <option value="AK">Alaska (AK)</option>
                            <option value="AZ">Arizona (AZ)</option>
                            <option value="AR">Arkansas (AR)</option>
                            <option value="CA">California (CA)</option>
                            <option value="CO">Colorado (CO)</option>
                            <option value="CT">Connecticut (CT)</option>
                            <option value="DE">Delaware (DE)</option>
                            <option value="DC">District Of Columbia (DC)</option>
                            <option value="FL">Florida (FL)</option>
                            <option value="GA">Georgia (GA)</option>
                            <option value="HI">Hawaii (HI)</option>
                            <option value="ID">Idaho (ID)</option>
                            <option value="IL">Illinois (IL)</option>
                            <option value="IN">Indiana (IN)</option>
                            <option value="IA">Iowa (IA)</option>
                            <option value="KS">Kansas (KS)</option>
                            <option value="KY">Kentucky (KY)</option>
                            <option value="LA">Louisiana (LA)</option>
                            <option value="ME">Maine (ME)</option>
                            <option value="MD">Maryland (MD)</option>
                            <option value="MA">Massachusetts (MA)</option>
                            <option value="MI">Michigan (MI)</option>
                            <option value="MN">Minnesota (MN)</option>
                            <option value="MS">Mississippi (MS)</option>
                            <option value="MO">Missouri (MO)</option>
                            <option value="MT">Montana (MT)</option>
                            <option value="NE">Nebraska (NE)</option>
                            <option value="NV">Nevada (NV)</option>
                            <option value="NH">New Hampshire (NH)</option>
                            <option value="NJ">New Jersey (NJ)</option>
                            <option value="NM">New Mexico (NM)</option>
                            <option value="NY">New York (NY)</option>
                            <option value="NC">North Carolina (NC)</option>
                            <option value="ND">North Dakota (ND)</option>
                            <option value="OH">Ohio (OH)</option>
                            <option value="OK">Oklahoma (OK)</option>
                            <option value="OR">Oregon (OR)</option>
                            <option value="PA">Pennsylvania (PA)</option>
                            <option value="RI">Rhode Island (RI)</option>
                            <option value="SC">South Carolina (SC)</option>
                            <option value="SD">South Dakota (SD)</option>
                            <option value="TN">Tennessee (TN)</option>
                            <option value="TX">Texas (TX)</option>
                            <option value="UT">Utah (UT)</option>
                            <option value="VT">Vermont (VT)</option>
                            <option value="VA">Virginia (VA)</option>
                            <option value="WA">Washington (WA)</option>
                            <option value="WV">West Virginia (WV)</option>
                            <option value="WI">Wisconsin (WI)</option>
                            <option value="WY">Wyoming (WY)</option>
                        </select>
                    </div>
                {/* <ClothesDescription/> */}
                </div>
                {/* <FormQuestions /> */}
            </div>
        )
    }
}

export default Forms;
