import React from 'react';
import {shallow} from 'enzyme';
import Header from './Header';
import { findByTestAtr} from '../../../Utils';

const setUp = (props={}) =>{
    const component = shallow(<Header {...props}/>);
    return component;
}

describe('Header Component',()=>{

    let component;
    beforeEach(()=>{
        component= setUp();
    })
        
    it('should render without errors', ()=>{
        const header = findByTestAtr(component,'header');
        expect(header.length).toBe(1);
    });

    it('should render logo without errors', ()=>{
       const logo = findByTestAtr(component, 'logoIMG')
       expect(logo.length).toBe(1);
    });
})


