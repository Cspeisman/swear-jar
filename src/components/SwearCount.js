import React, {PropTypes} from 'react';

export default class SwearCount extends React.Component {
  static propTypes = {count: PropTypes.number.isRequired}

  render() {
    return (
      <div style={baseStyle}>
        <strong>Count: </strong>
        <br />
        {this.props.count}
      </div>
    );
  }
}

const baseStyle = {
  width: '44%',
  color: 'black',
  display: 'inline-block',
}
