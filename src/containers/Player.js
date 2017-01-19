import React, {
  Component,
  PropTypes
} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PlayerComponent from '../components/PlayerComponent';

class Player extends Component {
  render() {
    const {actions} = this.props;
    return <PlayerComponent actions={actions}/>;
  }
}

Player.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps() {
  const props = {};
  return props;
}

function mapDispatchToProps(dispatch) {
  const actions = {};
  const actionMap = { actions: bindActionCreators(actions, dispatch) };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);
