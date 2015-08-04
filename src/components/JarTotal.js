import React, {PropTypes} from 'react';

export default class JarTotal extends React.Component {
  static propTypes = {totalCost: PropTypes.number.isRequired};

  render() {
    return (
      <div style={baseStyle}>
        <strong>Total: </strong>
        <br />
        ${this.props.totalCost.toFixed(2)}
      </div>
    );
  }
}

const baseStyle = {
  width: '44%',
  color: 'black',
  display: 'inline-block',
}
