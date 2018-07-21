import React from 'react';
import { View, Modal } from 'react-native';
import PropTypes from 'prop-types';

export default class FrameLoading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewOrder: 0,
    };
    this.increase = 1;
  }

  componentDidMount() {
    const { viewOrder } = this.state;
    this._mounted = true;
    this.setState({ viewOrder });
  }

  componentDidUpdate() {
    if (this.props.animating) {
      const { duration } = this.props;
      this._rotateView(duration);
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  _rotateView = duration => {
    const { views } = this.props;

    setTimeout(() => {
      const viewOrder = (this.increase + 1) % views.length;
      if (this._mounted) {
        this.setState({ viewOrder });
      }
    }, duration);
  };

  render() {
    const { viewOrder } = this.state;
    const view = this.props.views[viewOrder];
    const { loadingContainerStyle } = this.props;

    return (
      <Modal {...this.props.modalProps} visible={this.props.animating}>
        <View style={loadingContainerStyle}>{view}</View>
      </Modal>
    );
  }
}

FrameLoading.propTypes = {
  animating: PropTypes.bool.isRequired,
  views: PropTypes.arrayOf(PropTypes.element).isRequired,
  loadingContainerStyle: PropTypes.shape({}),
  duration: PropTypes.number,
  modalProps: PropTypes.shape({}),
};

FrameLoading.defaultProps = {
  loadingContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  duration: 450,
  modalProps: {},
};
