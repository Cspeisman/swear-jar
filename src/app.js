import React from 'react';
import {createStore, combineReducers} from 'redux';
import {provide} from 'react-redux';
import * as reducers from './redux/reducers';
import SwearJarApp from './SwearJarApp';

let reducer = combineReducers(reducers);
let redux = createStore(reducer);

//  For Debugging
window.redux = redux;


@provide(redux)
export default class App extends React.Component {
  render() {
    return <SwearJarApp />;
  }
}

React.render(<App />, document.getElementById('app'));
