import React from "react"
import { View, Modal } from "react-native"
import { PropTypes } from "prop-types"

export default class FrameLoading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewOrder: 0
    }
    this.increase = 1
  }

  componentDidUpdate() {
    if (this.props.animating) {
      const duration = this.props.duration
      this._rotateView(duration)
    }
  }

  _rotateView = duration => {
    const views = this.props.views
    const { viewOrder } = this.state

    setTimeout(() => {
      const viewOrder = this.increase++ % views.length
      this.setState({ viewOrder })
    }, duration)
  }

  render() {
    const { viewOrder } = this.state
    const view = this.props.views[viewOrder]
    const { loadingContainerStyle } = this.props

    return (
      <Modal {...this.props.modalProps} visible={this.props.animating}>
        <View style={loadingContainerStyle}>{view}</View>
      </Modal>
    )
  }
}

FrameLoading.proptypes = {
  animating: PropTypes.bool.isRequired,
  view: PropTypes.array.isRequired,
  loadingContainerStyle: PropTypes.object,
  duration: PropTypes.number,
  modalProps: PropTypes.object
}

FrameLoading.defaultProps = {
  animating: false,
  views: [],
  loadingContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  duration: 450,
  modalProps: {}
}
