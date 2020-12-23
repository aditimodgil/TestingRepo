import React, { Component } from 'react';
import './styles.scss';
import PropTypes from 'prop-types';

class ListItem extends Component{

    render(){

        const { title, description} = this.props;

        if(!title){
            return null;
        }

        return(
            <div className='listItem' data-test='listItemComponent'>
             <h1 data-test='title'>{title}</h1>
             <p data-test='desc'>{description}</p>
            </div>
        );

    }
}

ListItem.propTypes = {
    title : PropTypes.string,
    description : PropTypes.string
}


export default ListItem;