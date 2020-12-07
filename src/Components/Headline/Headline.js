import React, {Component} from 'react';
import './styles.scss';
import PropTypes from 'prop-types';


class Headline extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {title, description, tempArr} = this.props;
        
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

Headline.propTypes={
    title : PropTypes.string,
    description : PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        onlineStatus: PropTypes.bool

    }))

}

export default Headline;