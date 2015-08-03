import React, {PropTypes} from 'react';

export default class JarTotal extends React.Component {
  static propTypes = {totalCost: PropTypes.number.isRequired};

  render() {
    return (
      <div>
        <strong>Total: </strong>
        ${this.props.totalCost.toFixed(2)}
      </div>
    );
  }
}
