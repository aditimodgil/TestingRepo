import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAtr, checkProps} from '../../../Utils';
import SharedButton from './index';


const setUp = (props={}) =>{
    const component = shallow(<SharedButton {...props}/>);
    return component;
}


describe('Shared Button', ()=>{

   describe('check prop-types', ()=>{
       it('should NOT throw a warning', ()=>{

        const expectedProps = {
            buttonText : 'Example Button Text',
            emitEvent : () => {}
        }

        const propErr = checkProps(SharedButton, expectedProps);
        expect(propErr).toBeUndefined();

       })

   });

   describe('render', ()=>{

      let component;
      let mockfunc;
      beforeEach(()=>{
        mockfunc= jest.fn();
        const props = {
            buttonText : 'Example Button Text',
            emitEvent : mockfunc
        }

        component = setUp(props);


      });

      it('should render button component without errors', ()=>{
          const buttonComponent = findByTestAtr(component, 'buttonComponent');
          expect(buttonComponent.length).toBe(1);
      });

      it('should emit callback on click event', ()=>{
         const buttonComponent = findByTestAtr(component, 'buttonComponent');
         buttonComponent.simulate('click');
         const callback = mockfunc.mock.calls.length;
         expect(callback).toBe(1);
      });

   });


})