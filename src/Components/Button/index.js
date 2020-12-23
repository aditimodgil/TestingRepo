import React, { Component } from 'react';
import ProtoTypes from 'prop-types';
import './styles.scss';

class sharedButton extends Component{

    handleSubmit = ()=>{
        if(this.props.emitEvent){
            this.props.emitEvent();
        }
    }

    render(){
        const { buttonText} = this.props;

        return(
            <button data-test='buttonComponent' onClick={this.handleSubmit}>
               {buttonText}
            </button>
        );
    }
}

sharedButton.propTypes = {
    buttonText : ProtoTypes.string,
    emitEvent : ProtoTypes.func
}


export default sharedButton;