import React from 'react';
import ListItem from './index';
import {shallow} from 'enzyme';
import {findByTestAtr, checkProps} from '../../../Utils';


const setUp = (props = {})=>{
    const wrapper = shallow(<ListItem {...props}/>);
    return wrapper;
}


describe('ListItem Component', () => {
    
    describe('Check prop types', () => {
        
        it('should NOT throw a warning', ()=>{

            const expectedProps = {
                title : 'test title',
                description : 'test description'
            }

            const propErr = checkProps(ListItem, expectedProps);
            expect(propErr).toBeUndefined();

        })
    })
    

    describe(' Should render', () => {
        let component;
        beforeEach(()=>{
          const props = {
            title : 'test title',
            description : 'test description'
          }
        
          component = setUp(props);

        })

        it('should render ListItem component without erros', ()=>{
         const listItem = findByTestAtr(component, 'listItemComponent');
          expect(listItem.length).toBe(1);
        });
        it('should render title without erros', ()=>{
            const title = findByTestAtr(component, 'title');
            expect(title.length).toBe(1);
        });
        it('should render description component without erros', ()=>{
            const desc = findByTestAtr(component, 'desc');
            expect(desc.length).toBe(1);
        });
        
    })


    describe(' Should NOT render', () => {
        let component;
        beforeEach(()=>{
          const props = {
       
            description : 'test description'
          }
        
          component = setUp(props);

        })

       
        it('should render title without erros', ()=>{
            const title = findByTestAtr(component, 'title');
            expect(title.length).toBe(0);
        });
       
        
    })
    

})
