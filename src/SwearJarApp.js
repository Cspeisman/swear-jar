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
    const {swearJar} = this.props
    return (
      <div style={baseStyle}>
        <div style={costCopy}>${swearJar.costPerSwear.toFixed(2)} per swear</div>
        <PayButton {...this.props}/>
        <SwearCount count={swearJar.count} />
        <JarTotal totalCost={swearJar.totalCost} />
      </div>
    );
  }
}

const baseStyle = {
  color: 'grey',
  textAlign: 'center',
  width: '50%',
  margin: '0 auto',
}

const costCopy = {
  paddingBottom: '8px',
}
