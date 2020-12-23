import React from 'react';
import App from './App';
import {shallow} from 'enzyme';
import {findByTestAtr, testStore} from '../Utils';
import { Provider } from 'react-redux';


const setUp =(initialState={})=>{
    const store = testStore(initialState);
    const wrapper = shallow(<App store={store}/>).childAt(0).dive();
    console.log(wrapper.debug());
    return wrapper;
}

describe('App Component', ()=>{

    let component;
    beforeEach(()=>{
        const initialState = {
            posts : [{
                title:"title 1",
                body:"some text"
            },{
                title:"title 2",
                body:"some text"
            },{
                title:"title 3",
                body:"some text"
            }]
        }

        component = setUp(initialState);

    });

    it('should render without errors', ()=>{
        const appComponent = findByTestAtr(component, 'appComponent');
        expect(appComponent.length).toEqual(1);
    })

})