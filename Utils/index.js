import checkPropTypes from 'check-prop-types';
import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../src/reducers';
import {middlewares} from '../src/createStore';

export const findByTestAtr =(component, attr) =>{
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}

export const checkProps = (component, expectedProps) =>{
   const propErr = checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
   return propErr;
}

export const testStore = initialState =>{
    const createStoreWithMiddlewares = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddlewares(rootReducer, initialState);

}