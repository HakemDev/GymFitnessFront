import React, { Component } from 'react';

class Card extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className='container mt-3'>
                 {this.props.children} 
            </div>
        );
    }
}

export default Card;