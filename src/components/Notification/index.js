import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import ActionCreators from "store/ducks/notification";

import { Animated, TouchableOpacity, Text, View } from "react-native";

import { colors } from "../../styles";

import Icon from "react-native-vector-icons/FontAwesome";

import styles from "./styles";

const getColor = type => {
  switch (type) {
    case "warning":
      return colors.red;
    case "alert":
      return colors.alert;
    default:
      return colors.green;
  }
};

class Notification extends Component {
  static propTypes = {
    notification: PropTypes.shape({
      text: PropTypes.string,
      type: PropTypes.string,
      open: PropTypes.bool,
      time: PropTypes.number
    }).isRequired,
    clean: PropTypes.func.isRequired
  };
  state = {
    height: new Animated.Value(0),
    event: undefined,
    show: false
  };

  componentDidUpdate(prevProps) {
    if (prevProps.notification.open !== this.props.notification.open) {
      if (this.props.notification.open) {
        this.show();
      } else {
        this.hide();
      }
    }
  }

  onPressHide = () => {
    if (this.state.event) clearTimeout(this.state.event);
    this.hide();
  };

  hide = () => {
    Animated.timing(this.state.height, {
      duration: 500,
      toValue: 0
    }).start(() => {
      this.props.clean();
      this.setState({ show: false });
    });
  };

  show = () => {
    this.setState({
      event: setTimeout(() => this.hide(), this.props.notification.time),
      show: true
    });
    Animated.timing(this.state.height, {
      duration: 500,
      toValue: 56
    }).start();
  };

  render() {
    const { text, type } = this.props.notification;
    return (
      <Animated.View
        style={[
          styles.container,
          {
            backgroundColor: getColor(type),
            height: this.state.height
          }
        ]}
      >
        {this.state.show ? (
          <View style={styles.overlay}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity onPress={this.onPressHide} style={styles.button}>
              <Icon name="times" size={14} color={colors.white} />
            </TouchableOpacity>
          </View>
        ) : null}
      </Animated.View>
    );
  }
}

const mapStateToProps = state => ({
  notification: state.notification.data
});

const mapDispatchToProps = dispatch => ({
  clean: () => dispatch(ActionCreators.notificationClean())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Notification);
