import {types } from '../../actions/actionTypes';
import React from 'react';
import reducer from './reducer';

describe('Posts Reducer', ()=>{
    it('should return an empty object', ()=>{
        const newState = reducer(undefined, {});
        expect(newState).toEqual([]);
    })
    
    it(' should return the payload', ()=>{
        const posts = [ {title : 'test 1'},{title : 'test 1'},{title : 'test 1'}];
        const newState = reducer(undefined, {type: types.GET_POSTS, payload: posts});
        expect(newState).toEqual(posts);
    })
    })