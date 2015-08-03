import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import PayButton from './components/PayButton';
import SwearCount from './components/SwearCount';
import JarTotal from './components/JarTotal';

@connect(state => (
  {swearJar: state.swearJar}
))
export default class SwearJarApp extends React.Component {
  static propTypes = {swearJar: PropTypes.object.isRequired};

  render() {
    return (
      <div>
        <PayButton {...this.props}/>
        <SwearCount count={this.props.swearJar.count} />
        <JarTotal totalCost={this.props.swearJar.totalCost} />
      </div>
    );
  }
}
