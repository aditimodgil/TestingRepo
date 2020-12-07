import React from 'react';
import {shallow} from 'enzyme';
import Headline from './Headline';
import {findByTestAtr, checkProps} from '../../../Utils';

const setUp = (props={})=>{
    const component = shallow(<Headline {...props}/>);
    return component;
}


describe('Headline Component', ()=>{

    describe('check prop types', ()=>{
      
        let component;
        const expectedProps ={title:"title g",
        description:"describe",
        tempArr : [
            {
            fName: 'Joe',
            lName: 'Bloggs',
            email: 'joebloggs@gmail.com',
            age: 24,
            onlineStatus: true
            }
          ]}


        beforeEach(()=>{
            component= setUp();
        })

        it('should not end up in error',()=>{
            const propErr = checkProps(component, expectedProps);
            expect(propErr).toBeUndefined();
        })

    });

    describe('with props', ()=>{
        let component;
        beforeEach(()=>{
            component= setUp({title:"title g",
            description:"describe"});
        })

        it('should render headline component',()=>{
           const headline = findByTestAtr(component,'headline');
           expect(headline.length).toBe(1);
        })

        it('should render title',()=>{
            const title = findByTestAtr(component,'title');
            expect(title.length).toBe(1);
        })

        it('should render description',()=>{
            const description = findByTestAtr(component,'description');
            expect(description.length).toBe(1);
        })
    
    })

    describe('without props', ()=>{
        let component;
        beforeEach(()=>{
            component= setUp();
        })

        it('should not render Headline component',()=>{
            const headline = findByTestAtr(component,'headline');
           expect(headline.length).toBe(0);
        })
    
    })

})