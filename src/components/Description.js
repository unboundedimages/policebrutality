import React from 'react';

class ClothesDescription extends React.Component {
    render() {
        return (
            <div className='ui form stackable container'>
                <div className='fields'>
                    <div className='field'>
                        <label>Shirt</label>
                        <input type="text" placeholder="Shirt" />
                    </div>
                    <div className='field'>
                        <label>Pants</label>
                        <input type="text" placeholder="Pants" />
                    </div>
                    <div className='field'>
                        <label>Shoes</label>
                        <input type="text" placeholder="Shoes" />
                    </div>
                    <div className='field'>
                        <label>Hat</label>
                        <input type="text" placeholder="Hat" />
                    </div>
                    <div className='field'>
                        <label>Car</label>
                        <input type="text" placeholder="Make/model" />
                    </div>
                </div>
            </div>
        )
    }
}

export default ClothesDescription;