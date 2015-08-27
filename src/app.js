import React from 'react';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {provide} from 'react-redux';
import * as reducers from './redux/reducers';
import SwearJarApp from './SwearJarApp';
import {thunkMiddleware} from './utils/thunkMiddleware';

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware, // lets us dispatch() functions
)(createStore);

let reducer = combineReducers(reducers);
let redux = createStoreWithMiddleware(reducer);

//  For Debugging
window.redux = redux;


@provide(redux)
export default class App extends React.Component {
  render() {
    return <SwearJarApp />;
  }
}

React.render(<App />, document.getElementById('app'));
