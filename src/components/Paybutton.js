import React, {PropTypes} from 'react';
import * as SwearJarCommands from '../redux/commands/SwearJarCommands';

export default class PayButton extends React.Component {
  static propTypes = {dispatch: PropTypes.func}

  incrementSwear() {
    this.props.dispatch(SwearJarCommands.incrementSwearCount());
  }

  render() {
    return (
      <div>
        <div style={tapCopy}>Tap the jar everytime you swear.</div>
        <div style={buttonStyle} onClick={this.incrementSwear.bind(this)}>
          Tap to Pay!
        </div>
      </div>
    );
  }
}

const buttonStyle = {
  cursor: 'pointer',
  height: '200px',
  width: '200px',
  borderRadius: '50%',
  backgroundColor: 'blue',
  color: 'white',
  textAlign: 'center',
  lineHeight: '200px',
  margin: '0 auto',
  WebkitUserSelect: 'none',
};

const tapCopy = {
  paddingBottom: '16px',
};
