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

import Modal from './components/Modal';

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
    showModal: false,
    userInput: '',
    passwordInput: '',
  };

  async componentDidMount() {
    const { offset, opacity } = this.state;

    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 3,
        bouciness: 80,
      }),

      Animated.timing(opacity, {
        toValue: 1,
        duration: 1800,
      }),
    ]).start();
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    const {
      opacity, passwordInput, offset, userInput,
    } = this.state;

    const { loginUserRequest, loading } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={colors.primaryDarker} barStyle="light-content" />
        <Modal
          visible={this.state.showModal}
          onCloseModal={() => this.setState({ showModal: false })}
        />
        <View>
          <Animated.View style={{ opacity }}>
            <TouchableOpacity activeOpacity={0.6}>
              <Text style={styles.welcome}>FotonTech</Text>
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
              value={userInput}
              onChangeText={input => this.setState({ userInput: input })}
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
              value={passwordInput}
              onChangeText={input => this.setState({ passwordInput: input })}
            />
          </View>

          <Animated.View
            style={[
              {
                transform: [...offset.getTranslateTransform()],
              },
            ]}
          >
            <Button
              onPress={() => loginUserRequest({ login: userInput, password: passwordInput })}
              title="Entrar"
              loading={loading}
            >
              <Text style={styles.txtEnter}> Entrar </Text>
            </Button>
          </Animated.View>
          <View style={styles.createContainer}>
            <TouchableOpacity onPress={() => this.showModal()}>
              <Text style={styles.txtCreate}>Cadastrar Usuário</Text>
            </TouchableOpacity>
          </View>
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
