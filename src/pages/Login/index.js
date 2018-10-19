import Icon from 'react-native-vector-icons/FontAwesome';
import IconEntypo from 'react-native-vector-icons/Entypo';
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Animated,
} from 'react-native';

import Button from 'components/Button';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from 'store/ducks/user';

import { colors } from 'styles';
import styles from './styles';

class Login extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    loginUserRequest: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  };

  state = {
    opacity: new Animated.Value(0),
    offset: new Animated.ValueXY({ x: 0, y: 150 }),
    userInput: '',
    passwordInput: '',
  };

  async componentDidMount() {
    Animated.parallel([
      Animated.spring(this.state.offset.y, {
        toValue: 0,
        speed: 3,
        bouciness: 80,
      }),

      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 1800,
      }),
    ]).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.primaryDarker} barStyle="light-content" />
        <View>
          <Animated.View style={{ opacity: this.state.opacity }}>
            <TouchableOpacity activeOpacity={0.6} onPress={() => this.showModal()}>
              <Text style={styles.welcome}>Telinveste</Text>
            </TouchableOpacity>
          </Animated.View>

          <View style={styles.searchSection}>
            <Icon style={styles.searchIcon} name="user" size={20} />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Seu login"
              underlineColorAndroid="transparent"
              placeholderTextColor={colors.whiteTransparent}
              value={this.state.user}
              onChangeText={userInput => this.setState({ userInput })}
            />
          </View>

          <View style={styles.searchSection}>
            <IconEntypo style={styles.searchIcon} name="lock" size={20} />
            <TextInput
              style={styles.input}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry
              placeholder="Sua senha secreta"
              underlineColorAndroid="transparent"
              placeholderTextColor={colors.whiteTransparent}
              value={this.state.passwordInput}
              onChangeText={passwordInput => this.setState({ passwordInput })}
            />
          </View>

          <Animated.View
            style={[
              {
                transform: [...this.state.offset.getTranslateTransform()],
              },
            ]}
          >
            <Button
              onPress={() =>
                this.props.loginUserRequest(this.state.userInput, this.state.passwordInput)
              }
              title="Entrar"
              loading={this.props.loading}
            >
              <Text style={styles.txtEntrar}> Entrar </Text>
            </Button>
          </Animated.View>
          {/* <View style={styles.provedorContainer}>
            <TouchableOpacity onPress={() => this.showModal()}>
              <Text style={styles.txtProvedor}>Alterar Provedor</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.user.loading,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...UserActions }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
console.disableYellowBox = true;
