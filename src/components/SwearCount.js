import React, {PropTypes} from 'react';

export default class SwearCount extends React.Component {
  static propTypes = {count: PropTypes.number.isRequired}

  render() {
    return (
      <div>
        <strong>Count: </strong>
        {this.props.count}
      </div>
    );
  }
}
