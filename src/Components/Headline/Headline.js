import React, {Component} from 'react';
import './styles.scss';

class Headline extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {title, description} = this.props;
        
        if(!title){
            return null;
        }

        return(
            <div className="headline" data-test="headline">
                <h1 data-test="title">{title}</h1>
                <p data-test="description">{description}</p>
            </div>
    
        );
    }
   
}

export default Headline;