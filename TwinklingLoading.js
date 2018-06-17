import React from "react"
import { View, Modal, StyleSheet, Image, Text } from "react-native"

export default class TwinklingLoading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      viewOrder: 0
    }
    this.increase = 1
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.animating) {
      const duration = this.props.duration
      this._rotateView(duration)
    }
  }

  _rotateView = (duration = 450) => {
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
    console.log("viewOrder", viewOrder)
    return (
      <Modal
        {...this.props.modalProps}
        visible={this.props.animating}
        transparent={true}
        onRequestClose={() => this.setModalVisible(false)}
      >
        <View style={styles.modalContainer}>{view}</View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})
